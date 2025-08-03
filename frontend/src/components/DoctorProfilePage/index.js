import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css"

const DoctorProfilePage = () => {

    const [doctors, setDoctors] = useState([]);
    
    const { id } = useParams();
    const navigate = useNavigate();

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

    const doctor = doctors.find(doc => doc.id === parseInt(id));

    if (!doctor) {
    return <p>Loading doctor details...</p>;
  }


    const handleBooking = () => {
      navigate(`/doctor/${doctor.id}/book`);
    }

    return(
        <div className="doctor-profile">
            <h2>{doctor.name}</h2>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Availability:</strong> {doctor.availability}</p>
            <p><strong>Schedule:</strong> {doctor.schedule}</p>
            <p><strong>About:</strong> {doctor.bio}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p><strong>Consultation Fees:</strong> {doctor.consultationFees}</p>
            <button onClick={handleBooking}>Book Appointment</button>
        </div>
    )
}
export default DoctorProfilePage