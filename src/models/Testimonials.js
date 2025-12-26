const mongoose = require("mongoose")

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    review: { type: String, required: true },
    rating: { type: Number, default: 5 }
  },
  { timestamps: true }
)

module.exports =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema)
