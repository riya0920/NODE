const mailer=require('nodemailer')
module.exports.sendMail=async(to,OTP)=>{
  let transporter=mailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      auth:{
          user:"riyasoni2092001@gmail.com",
          pass:'mbjaclyelsbonqiv'
      }
  })

  const mailOptions={
      from:'riyasoni2092001@gmail.com',
      to:to,
      subject:"tesnt Mail1",
      text:'Your Otp is:'+OTP
      // attachments:{
      //     filename:'Normal Table.pdf'
      // }
  }
  transporter.sendMail(mailOptions,(err,func)=>{
      if(err)
      {
          console.log(err)
      }
      else{
          console.log(func)
          console.log(to)
          // apicall2(to,OTP,id)
          
      }
  })
}
// sendMail('patelyogi650@gmail.com')
