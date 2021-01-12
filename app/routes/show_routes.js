// require the express library
const express = require('express')
const passport = require('passport')
// create a router so our code is more modular
const router = express.Router()
// require show model
const Show = require('./../models/show')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')
const requireToken = passport.authenticate('bearer', { session: false })
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: {  title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// CREATE
// POST /shows/
router.post('/shows', requireToken, removeBlanks, (req, res, next) => {
  // extract the show from the incoming request's data (req.body)
  const showData = req.body.show
  // add user as show owner
  showData.owner = req.user._id
  // Create a show using the showData
  Show.create(showData)
    // respond with the status code 201 created and the show that was created
    .then(show => res.status(201).json({ show: show }))
    // if an error occurs, call the next middleware (the error handler middleware)
    .catch(next)
})

// INDEX
// GET /shows
router.get('/shows', (req, res, next) => {
  Show.find()

    .then(shows => res.json({
      shows: shows
    }))
    .catch(next)
})
// SHOW
// GET /shows/:id
router.get('/shows/:id', (req, res, next) => {
  const id = req.params.id

  Show.findById(id)
    .populate('owner', '-hashedPassword')
    .then(customErrors.handle404)
    .then(show => res.json({
      show: show
    }))
    .catch(next)
})
// UPDATE
// PATCH /shows/:id
router.patch('/shows/:id', requireToken, removeBlanks, (req, res, next) => {
  const id = req.params.id
  delete req.body.show.owner
  const showData = req.body.show
  Show.findById(id)
    .then(customErrors.handle404)
    .then(show => {
      requireOwnership(req, show)
      return show.updateOne(showData)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /shows/:id
router.delete('/shows/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Show.findById(id)
    .then(customErrors.handle404)
    .then(show => {
      requireOwnership(req, show)
      return show.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
