const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



// desc    Register new user
// route   POST /api/users
// access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, address, hobby, birthday, password } = req.body

  if (!name || !email || !address || !hobby || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }


  // Create user
  const user = await User.create({
    name,
    email,
    address,
    hobby,
    birthday,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      hobby: user.hobby,
      birthday: user.birthday,
      gender: user.gender,
      password: user.password,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user data
// @route   GET /api/users
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

module.exports = {
  registerUser,
  loginUser,
}