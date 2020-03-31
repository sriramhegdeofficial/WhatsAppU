const mongoose = require('mongoose');



userSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        max: 50,
        index: true
    },

    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        max: 50,
        index: true

    },
    password: {
        type: String,
        trim: true,
        required: true,
        min: 6
    },
    time : 
    { type: Number, 
      default: (new Date()).getTime() 
    } 

});

const User = mongoose.model('User', userSchema);

module.exports = User;