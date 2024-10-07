import formData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";

dotenv.config();

const mailgun = new Mailgun(formData);

const TOKEN = process.env.MAILGUN_APIKEY;
const url = process.env.MAILGUN_URL;

export const mg = mailgun.client({
  username: "api",
  key: TOKEN,
  url: url,
});

export const sender = "Donation Flow <df@ahmed.software>";
