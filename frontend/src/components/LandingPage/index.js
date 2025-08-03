import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css"

const LandingPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
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

    const filteredDoctors = doctors.filter((doctor) =>
        `${doctor.name} ${doctor.specialization}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="landing-page">
        <h1>Welcome to Our Healthcare Portal</h1>
        <input
            type="text"
            placeholder="Search by name or specialization"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
        />
        <div className="doctors-list">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Link key={doctor.id} to={`/doctor/${doctor.id}`} className="doctor-card">
                <h2>{doctor.name}</h2>
                <p>Specialization: {doctor.specialization}</p>
                <p>Availability: {doctor.availability}</p>
                <p>Schedule: {doctor.schedule}</p>
              </Link>
            ))
          ) : (
            <p>No doctors found matching your search.</p>
          )}
        </div>
        </div>
    );
}

export default LandingPage