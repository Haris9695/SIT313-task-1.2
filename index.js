require("dotenv").config();

const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg)  => {

    try {
        await sgMail.send(msg);
        console.log("Message sent successfully");


    }
    catch (error){


    console.error(error);
    if (error.respond) {

        console.error(error.response.body);

    }
    }
};

sendMail({
to:"saeed.haris9695@gmail.com",
from:"haris.saeede9695@gmail.com",
subject: "kamus says hello",
text:"comfort to last",




});

