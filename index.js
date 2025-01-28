const express = require("express");
const app = express();
const Razorpay = require('razorpay');
const PORT = 3000;
const sql = require("mysql2");
const cors = require("cors");
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "hello",
    database: "movie"
})

db.connect((err) => {
    if(err) {
        console.log("error");
    }
    else{
        console.log("db is connected");
    }
})


app.post("/bookticket" , (req,res) => {
    const {movie , timi ,  tickets , cost , ticketId} = req.body;

    if(!movie|| !timi || ! tickets || !cost || !ticketId){
        return res.status(500).json("all fields are req");
    }

    const insert = `
       insert into tickets (moviename , timee , noticket , cost , id)
       values(?,?,?,?,?);
    `

    db.query(insert, [movie, timi, tickets, cost, ticketId], (err, result) => {
        if (err) {
            console.log("There is an error inserting the value:", err);
            return res.status(500).json("Error inserting data");
        } else {
            console.log("Value is inserted successfully");
            return res.status(200).json("Ticket booked successfully");
        }
    });
    
})




app.listen(PORT , () => {
    console.log("port is running");
})
