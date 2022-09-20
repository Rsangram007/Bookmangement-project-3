const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true
        
    },
    name: {
        type: String,
        required: true
        
    },
    phone: {
        type: String,
        required: true,
        unique: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15
    
    },

    address: {
      type: String
      
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);