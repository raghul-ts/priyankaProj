const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    price: Number
})


const messageModel = mongoose.model("paid", msgSchema);
module.exports = messageModel

