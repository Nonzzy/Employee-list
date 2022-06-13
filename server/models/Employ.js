const mongoose = require("mongoose");

const EmploySchema = new mongoose.Schema({
    EmployName: {
        type: String,
        required: true,
    },

    EmployAge: {
        type: Number,
        required: true,
    },

});

const Employ = mongoose.model("Employ", EmploySchema);

module.exports = Employ;