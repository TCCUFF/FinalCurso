const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use (express.json()); //req.body


//ROUTES

//create a todo
app.post ("/randoms", async(req, res) => {
    try {
        //console.log(req.body);
        const {description} = req.body;
        const NewTodo  = await pool.query("Insert INTO \"Cotacoes\" (ticker) Values ($1) RETURNING *",
             [description]
        );
        //(1111,'2021-01-01','TESTANDO','1111')")
        res.json(NewTodo);
    } catch (error) {
        console.error(error.massage);
    }
})

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000")
})