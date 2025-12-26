const Testimonial = require("../models/Testimonials")

// GET all testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 })
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// POST testimonial (admin / seed)
const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body)
    res.status(201).json(testimonial)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { getTestimonials, createTestimonial }
