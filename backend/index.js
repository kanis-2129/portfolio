const express = require('express')
const cors = require('cors')
const app =express()

app.use(express.json())
app.use(cors())

const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "kaniswarik@gmail.com",
    pass: "wyam hrvt mgiu asrh",
  },
});

app.post("/",function(req,res){
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message

    transporter.sendMail(
    {
        from:"kaniswarik@gmail.com",
        to:"kaniskasinathan@gmail.com",
        subject:"A message from portfolio",
        text: `Name:${name}\nEmail:${email}\nMessage:${message}`

    },

    function(err,info){
        if(err)
        {
            console.log(err)
            res.send(
                alert("Email not send")
            )
        }
        else{
            console.log(info)
            res.send(
                alert("Email Successfully sended")
            )
        }
    }
)
})


app.listen(3000,function()
{
    console.log("server started.....")
})