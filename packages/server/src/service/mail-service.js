const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(name, to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Vartotojo aktyvacija ' + process.env.API_URL,
      text: '',
      html: `
                    <div>
                     <h2>Sveiki, ${name}! Malonu kad registruojatės.</h2>
                     <h2>Norėdami aktyvuoti savo vartotoją, paspauskite šią nuorodą:</h2>
                     <a href="${link}">${link}</a>
                    </div>
                `,
    });
  }
}

module.exports = new MailService();
