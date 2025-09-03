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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your Gmail
      replyTo: email, // User email for reply
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message: ${subject}`,
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f9fafb; padding:20px;">
        <div style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
<div style="background-color:#1D4ED8; color:#ffffff; padding:20px 30px; text-align: center;">
  <h1 style="margin:0; font-size:24px;">New Message from Portfolio</h1>
</div>


          <!-- Body -->
          <div style="padding:30px; color:#111;">
            <p style="font-size:16px; margin-bottom:10px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size:16px; margin-bottom:10px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size:16px; margin-bottom:10px;"><strong>Subject:</strong> ${subject}</p>
            <p style="font-size:16px; margin-bottom:10px;"><strong>Message:</strong></p>
            <div style="background-color:#f3f4f6; padding:15px; border-left:4px solid #1D4ED8; border-radius:4px; font-size:15px; line-height:1.5;">
              ${message}
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color:#f3f4f6; padding:15px 30px; color:#555; font-size:12px; text-align:center;">
            This message was sent from your portfolio contact form. <br>
            &copy; ${new Date().getFullYear()} Ismail Nayef. All rights reserved.
          </div>
        </div>
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
