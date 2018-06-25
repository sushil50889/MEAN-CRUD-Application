var mongoose = require('mongoose');

//defining Schema of users
var userSchema = new mongoose.Schema({
name:   {
        type: String,
        trim: true
}, 
dob:   {
        type: String
},            
email: {
        type: String,
        lowercase: true,
        trim: true
},
phone: {
        type: String,
        trim: true
},     
city: {
        type: String,
        trim: true
},
avatar: {
        type: String,
        trim: true,
        default: ''
},      
active: {
          type: Boolean,
          default: true
},
date: {
        type: Date,
        default: Date.now
}       
});

//exporting user model
module.exports = mongoose.model('user', userSchema);