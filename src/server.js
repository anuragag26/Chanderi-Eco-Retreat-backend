const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()
connectDB()

const app = express()

// 🔥 MUST COME BEFORE ROUTES
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/contact", require("./routes/contact.routes"))
app.use("/api/bookings", require("./routes/booking.routes"))
app.use("/api/testimonials", require("./routes/testimonial.routes"))

app.get("/", (req, res) => {
  res.send("API running...")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


