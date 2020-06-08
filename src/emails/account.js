const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//send email for welcome or cancel
const sendEmail = (email, name, welcome = true) => {
  const text = welcome
    ? `Welcome to the app ${name}, Let me know how you get along with the app.`
    : `Goodbye, ${name}. I hope to see you back soon.`;
  const subject = welcome ? "Thanks for joining in" : "Sorry to see you go!";

  sgMail.send({
    to: email,
    from: "rajthala.rohan@hotmail.com",
    subject: subject,
    text: text
  });
};

module.exports = {
  sendEmail
};
