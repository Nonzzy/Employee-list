const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    EmpName: {
        type: String,
        required: true,
    },

    EmpPhoneNum: {
        type: Number,
        required: true,
    },
    
    EmpUsername: {
        type: String,
        required: true,
    },

    EmpPassword: {
        type: String,
        required: true,
    },

});

const Emp = mongoose.model("Emp", EmpSchema);
module.exports = Emp;