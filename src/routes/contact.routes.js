const express = require("express")
const router = express.Router()

const { createContact } = require("../controllers/contact.controller")

// Create contact
router.post("/", createContact)

// Get all contacts (admin/debug)
router.get("/", async (req, res) => {
  const Contact = require("../models/Contact")
  const contacts = await Contact.find()
  res.json(contacts)
})

module.exports = router
