const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email service (e.g., Gmail)
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    })

    const mailOptions = {
      from: 'your-email@example.com',
      to: 'austintran616@gmail.com', // Replace with your email
      subject: data.subject,
      text: `${data.name} (${data.email}) says: ${data.message}`,
    }

    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    }
  }
}
