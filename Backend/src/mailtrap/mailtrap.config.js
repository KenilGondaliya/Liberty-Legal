import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Liberty Legal Accossietes",
};

export const recipients = [
  {
    email: "kenilgondaliya960@gmail.com",
  }
];

client
.send({
  from: sender,
  to: recipients,
  subject: "Contact",
  text: "Liberty Legal Contact Very Soon ",
  category: "Integration Test",
})
.then(console.log, console.error);
