const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
name: String,
email: String,
tapCode: [Number]
});

module.exports = User = mongoose.model('User', UserSchema);