const express = require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const path = require("path");

const dbPath = path.join(__dirname, "data.db");

const app = express();

app.use(express.json());
app.use(cors());

let db;

const initializeDbAndServer = async () => {
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/");
        })
    }
    catch(e){
        console.log(e.message)
        process.exit(1)
    }
}
initializeDbAndServer()


app.get("/doctors", async (request, response) => {
    try{
        const getDoctorsQuery = `
            SELECT * FROM doctors_details;
        `;
        const doctors = await db.all(getDoctorsQuery);
        response.json(doctors);
    }
    catch(e){
        console.log(e.message);
        response.status(500).send("Internal Server Error");
    }
})