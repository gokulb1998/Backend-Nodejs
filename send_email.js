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
  to: 'evzgaming007@gmail.com , teamdev2k19@gmail.com , azeemulhaq770@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
//   text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});