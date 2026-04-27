const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chetandhapkas27_db_user:0mUrEZUcEHMlKDPX@cluster0.iyeogl5.mongodb.net/?appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Server Running");
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chetannnnnd098@gmail.com",
    pass: "ewhhdidecczyqpgw"
  }
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save in DB
    const newData = new Contact(req.body);
    await newData.save();

    // Send Email
    const mailOptions = {
      from: email,
      to: "chetannnnnd098@gmail.com",
      subject: `New Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.send("Message Sent & Saved ✅");

  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});