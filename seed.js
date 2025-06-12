//to automatically load answers file into mongodb
require('dotenv').config();
const mongoose = require('mongoose');
const Answer = require('./models/Answer'); // This is your Mongoose schema

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString)
  .then(() => {
    console.log("MongoDB connected");

    // Insert your data here:
    const answers = [
      {
        slug: "zinah_in_islam",
        heading: "Zinah (Fornication) in Islam",
        question: "Is Zinah (Fornication) Halal in Islam?",
        answer: "Zinah (adultery or fornication) is strictly haram (forbidden) in Islam. It is classified as one of the major sins in both the Qur’an and the Sunnah.",
        fromQuran: [],
        fromSunnah: [],
        conclusion: "Zinnah is a major sin that brings about spiritual, social, and legal consequences. Islam calls believers to purity, modesty, and safeguarding their chastity. May Allah protect us all from such sins and guide us to what is pure and lawful."
      }
    ];

    return Answer.insertMany(answers);
  })
  .then(() => {
    console.log("Data inserted successfully");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });
