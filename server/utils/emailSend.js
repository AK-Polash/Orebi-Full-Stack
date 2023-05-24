const nodemailer = require("nodemailer");

const emailSend = async (res, otp, email, fieldName) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "polashk199@gmail.com",
        pass: "omggidpizbjreuyp",
      },
    });

    let info = await transporter.sendMail({
      from: "polashk199@gmail.com",
      to: email,
      subject: "Forgot Password?",
      html: `<p>Your password reset OTP code is <b>${otp}</b>. Insert the code to the match OTP page and finally reset the password.</p>`,
    });

    if (!info.accepted.length > 0) {
      return res.send({
        error: "occured a problem while sending the email",
        errorField: fieldName,
      });
    }

    return res.send({ message: "successfully sent the email" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = emailSend;
