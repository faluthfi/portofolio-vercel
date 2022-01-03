const nodemailer = require('nodemailer')

export default async (req, res) => {
    //set variable from body
    const { name, email, subject, message } = req.body

    //Setting up Transponder for connecting to the email
    const transporter = nodemailer.createTransport({
        port: process.env.MAIL_PORT,
        host: process.env.MAIL_URL,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
        secure: true
    });

    //Make sure the method of the request is post
    if (req.method !== 'POST' || req.headers.host != process.env.WEB_URL) {
        return res.status(400).json({ 'status': 'not okay' })
    }

    try {
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });


        const mailData = {
            from: {
                name: `${name}`,
                address: process.env.MAIL_USER
            },
            to: process.env.MAIL_DESTINATION,
            subject: `${subject} |sent by ${name}`,
            text: message,
            html:
                <>
                    <div>{message}</div>
                    <div>{`Contact at ${email}`}</div>
                </>
        }

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        console.log(req.headers.host)
        res.status(200).json({ status: "OK" });
    }
    catch (err) {
        res.status(400).json({
            status: 'Error',
            message: err
        })
    }

}