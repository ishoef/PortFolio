import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email options with HTML formatting
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your Gmail (must match login)
      replyTo: email, // User's email for reply
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="color: #1D4ED8;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f3f4f6; padding: 10px; border-radius: 5px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 0.9em; color: #555;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ msg: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Failed to send message" });
  }
}
