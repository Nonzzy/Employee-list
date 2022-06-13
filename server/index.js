const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const app = express();

const EmpsModel = require("./models/Emp");
const EmpModel = require("./models/Employ");
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/myAppdb",{
    useNewUrlParser: true,
});

app.post("/insert", async (req,res)=> {
    const EmpName = req.body.EmpName;
    const EmpPhoneNum = req.body.EmpPhoneNum;
    const EmpUsername = req.body.EmpUsername;
    const EmpPassword = req.body.EmpPassword;

    const emp = new EmpsModel({EmpName: EmpName, EmpPhoneNum: EmpPhoneNum, EmpUsername: EmpUsername, EmpPassword: EmpPassword});

    try{
        await emp.save();
        res.send("data inserted");
    } catch(err){
        console.log(err)
    }
});


app.post("/read", async (req,res)=> {
    const EmployName = req.body.EmployName;
    const EmployAge= req.body.EmployAge;

    const employ = new EmpModel({EmployName: EmployName, EmployAge: EmployAge});

    try{
        await employ.save();
        res.send("user added");
    } catch(err){
        console.log(err)
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001...");
});