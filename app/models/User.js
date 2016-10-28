/**
 * Created by D.Musev on 27.10.2016 г..
 */

// grab mongoose
let mongoose = require('mongoose')

let requiredValidationMessage = '{PATH} is required'

// define our User schema
let userSchema = mongoose.Schema({
  username: { type: String, required: requiredValidationMessage, unique: true },
  firstName: { type: String, required: requiredValidationMessage },
  lastName: { type: String, required: requiredValidationMessage },
  salt: String,
  hashedPass: String,
  roles: [String],
  password: String // TODO: to be removed
})

// user schema methods go here

// export the model to be used in other files
module.exports = mongoose.model('User', userSchema)
