# Healthcare Appointment Booking Web Application

This is a full-stack web application that allows users to view doctor profiles and book appointments. It consists of a **React.js frontend** and a **Node.js + Express backend**, with a SQLite database used for data storage.

---

## Project Structure

.
├── backend
│ ├── server.js
│ ├── data.db
│ └── ...
└── frontend
├── src
│ ├── components
│ │ ├── LandingPage
│ │ ├── DoctorProfilePage
│ │ └── BookAppointmentPage
│ └── App.js
└── ...

---

## Tools & Technologies Used

### Frontend:
- **React.js** – UI development
- **React Router DOM** – Page navigation
- **JavaScript (ES6)** – Logic & interactivity
- **Normal CSS** – Responsive styling (media queries)
- **Fetch API** – REST calls to backend

### Backend:
- **Node.js** – Runtime environment
- **Express.js** – REST API server
- **SQLite3** – Lightweight embedded database

---

## Features

- Responsive landing page
- View doctor profiles dynamically
- Book appointment with selected doctor
- Confirmation message on booking
- Data fetched from SQLite database via REST API

---

## 🚀 How to Run

### Backend:
```bash
cd backend
npm install
node server.js
Runs on: http://localhost:3000
```

### Frontend:
```bash
cd frontend
npm install
npm start
Runs on: http://localhost:3001 or assigned port
```

Improvements with More Time

If given additional time, I would work on the following enhancements to improve the functionality and user experience of the healthcare appointment booking system:

User Authentication System: Implement secure login/signup for patients and doctors with role-based access control.

Search & Filters: Improve search functionality with filters like availability, specialization, fees range, and ratings.

Rating & Review System: Allow patients to rate doctors and leave feedback after consultations.



Challenges Faced and Solutions

During development, I encountered a few key challenges:

Database Integration: Fetching data dynamically from the backend and displaying it correctly on the frontend required precise API design.
Solution: Created clean RESTful APIs with Express.js and handled asynchronous operations using async/await.

Bug with Multiple Doctor Names Displaying on Booking Page: Initially, clicking on a doctor showed all doctors' names instead of the selected one.
Solution: Isolated the state of the selected doctor properly and ensured only that doctor’s data was passed to the BookAppointmentPage.

Responsiveness: Designing a fully responsive layout that looks good on both desktop and mobile took time.
Solution: Used media queries and flex layouts with normal CSS to ensure consistency across devices.

Responsive Design Enhancements: Fine-tune the UI for better responsiveness and accessibility across all screen sizes.
