const Contact = require("../models/Contact")

const createContact = async (req, res) => {
  try {
    console.log("Contact body received:", req.body) // 👈 ADD THIS

    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const contact = await Contact.create({
      name,
      email,
      message
    })

    res.status(201).json({
      success: true,
      message: "Message received successfully",
      contact
    })
  } catch (error) {
    console.error("Contact error:", error)
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = { createContact }


