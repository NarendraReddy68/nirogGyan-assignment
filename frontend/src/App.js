import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DoctorProfilePage from "./components/DoctorProfilePage";
import BookAppointmentPage from "./components/BookAppointmentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/doctor/:id/book" element={<BookAppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
