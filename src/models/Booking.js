const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema(
  {
    accommodationId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    guests: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Booking", bookingSchema)
