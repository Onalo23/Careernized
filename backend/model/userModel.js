const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
      unique: true,
    },
    firstHobby: {
      type: String,
      required: [true, 'Please add a hobby 1'],
      unique: true,
    },
    secondHobby: {
      type: String,
      required: [true, 'Please add a hobby 2'],
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please add a date of birth'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    gender: {
      type: String,
      required: [true, 'Please add a gender'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)