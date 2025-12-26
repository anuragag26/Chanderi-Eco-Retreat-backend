const express = require("express")
const router = express.Router()

const {
  getTestimonials,
  createTestimonial
} = require("../controllers/testimonial.controller")

router.get("/", getTestimonials)
router.post("/", createTestimonial) // later protect with auth

module.exports = router
