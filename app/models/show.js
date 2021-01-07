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
  releaseDate: {
    type: Date,
    required: false
  },
  description: {
    type: Number,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Show', showSchema)
