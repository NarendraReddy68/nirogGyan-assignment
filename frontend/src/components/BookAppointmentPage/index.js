import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css"

const BookAppointmentPage = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    });
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
            const fetchDoctors = async () => {
                try {
                    const response = await fetch("http://localhost:3000/doctors");
                    if (response.ok) {
                        const data = await response.json();
                        setDoctors(data);
                    }
                } catch (error) {
                    console.log("Error fetching doctors:", error);
                }
            };
            fetchDoctors();
    }, []);

    const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));
    if (!doctor) {
        return <p>Loading doctor details...</p>;
    }

    const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment booked successfully!");
    };


    return(
        <div className="appointment-form">
            <h2>Book Appointment with {doctor.name}</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Patient Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label><br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label><br />
            <label>
                Desired Date & Time:
                <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required />
            </label><br />
            <button type="submit">Confirm Appointment</button>
            </form>
        </div>
    )
}
export default BookAppointmentPage