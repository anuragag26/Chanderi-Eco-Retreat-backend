const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")
  } catch (error) {
    console.error("MongoDB connection failed", error)
    process.exit(1)
  }
}

module.exports = connectDB

// const mongoose = require("mongoose")

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI)

//     console.log("MongoDB Connected")
//     console.log("DB NAME 👉", mongoose.connection.name)
//     console.log("DB HOST 👉", mongoose.connection.host)

//   } catch (error) {
//     console.error("MongoDB connection failed", error)
//     process.exit(1)
//   }
// }

// module.exports = connectDB

