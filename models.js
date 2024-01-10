const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const dataSchema = new mongoose.Schema({
    // Define your data schema
});

const User = mongoose.model('User', userSchema);
const Data = mongoose.model('Data', dataSchema);

module.exports = { User, Data };
