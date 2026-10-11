const Admin =
  require("../models/Admin");

const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

exports.login =
  async (req, res) => {

    try {

      const {
        username,
        password,
      } = req.body;

      const admin = await Admin.findOne({ username });
      console.log("Login database:", Admin.db.name);
console.log("Login username:", username);
console.log("Admin found:", !!admin);

if (!admin) {
  return res.status(401).json({
    message: "Invalid Credentials",
  });

      }

      const isMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!isMatch) {
        return res
          .status(401)
          .json({
            message:
              "Invalid Credentials",
          });
      }

      const token =
        jwt.sign(
          {
            id: admin._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );

      res.json({
        token,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };