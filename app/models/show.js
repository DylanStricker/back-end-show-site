const mongoose = require('mongoose')
const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  releaseDate: {
    type: Date,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Show', showSchema)
