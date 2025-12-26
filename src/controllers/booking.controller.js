const Booking = require("../models/Booking")
const sendEmail = require("../utils/sendEmail")

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body)

    /* =========================
       EMAIL TO CUSTOMER
    ========================== */
    await sendEmail(
      booking.email, // 👈 CUSTOMER EMAIL
      "Booking Confirmation – Chanderi Eco Retreat",
      `
        <h2>Thank you for your booking!</h2>
        <p>Dear ${booking.name},</p>

        <p>Your booking request has been successfully received.</p>

        <ul>
          <li><strong>Check In:</strong> ${new Date(booking.checkIn).toDateString()}</li>
          <li><strong>Check Out:</strong> ${new Date(booking.checkOut).toDateString()}</li>
          <li><strong>Guests:</strong> ${booking.guests}</li>
        </ul>

        <p>Our team will contact you shortly to confirm availability.</p>

        <p>Regards,<br/>Chanderi Eco Retreat</p>
      `
    )

    /* =========================
       EMAIL TO ADMIN
    ========================== */
    await sendEmail(
      process.env.EMAIL_USER, // 👈 ADMIN EMAIL
      "New Booking Received – Action Required",
      `
        <h2>New Booking Alert</h2>

        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Check In:</strong> ${new Date(booking.checkIn).toDateString()}</p>
        <p><strong>Check Out:</strong> ${new Date(booking.checkOut).toDateString()}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
      `
    )

    res.status(201).json({
      success: true,
      message: "Booking submitted & confirmation email sent",
      booking
    })

  } catch (error) {
    console.error("Booking Email Error:", error)
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = { createBooking }




