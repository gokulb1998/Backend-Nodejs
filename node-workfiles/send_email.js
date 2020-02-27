var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'b.gokul100@gmail.com',
    pass: 'yuqjpdsrlzkiallb'
  }
});

var mailOptions = {
  from: 'b.gokul100@gmail.com',
  to: ' vignesh.kumar@inceptionlabs.in',
  subject: 'Send Mail By Nodejs',
  html: '<h1>Hi,Its me</h1><p>Your Account is hacked..LOL</p>'
//   text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});