
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

async function updateAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected database:", mongoose.connection.name);

    const username = process.env.NEW_ADMIN_USERNAME;
    const password = process.env.NEW_ADMIN_PASSWORD;

    if (!username || !password) {
      throw new Error("Admin credentials missing in .env");
    }

    let admin = await Admin.findOne();

    if (!admin) {
      console.log("No admin record found.");
      console.log("Check the database and collection used by login.");
      return;
    }

    admin.username = username;
    admin.password = await bcrypt.hash(password, 12);

    await admin.save();

    const verified = await Admin.findById(admin._id);

    const usernameMatches = verified.username === username;
    const passwordMatches = await bcrypt.compare(
      password,
      verified.password
    );

    console.log("Username saved:", usernameMatches);
    console.log("Password saved:", passwordMatches);
    console.log("Admin update verification complete.");
  } catch (error) {
    console.error("Update failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

updateAdmin();
