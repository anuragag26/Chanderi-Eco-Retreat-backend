const mongoose = require("mongoose")

const accommodationSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  features: [String]
})

module.exports = mongoose.model("Accommodation", accommodationSchema)
