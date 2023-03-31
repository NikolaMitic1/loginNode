const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username : {
        Type : String,
    },
    password : {
        Type : String,
    }
});

module.exports = mongoose.model('Register', RegisterSchema);