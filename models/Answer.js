const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  heading: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  fromQuran: [{
    reference: String,
    text: String,
    commentary: String
  }],
  fromSunnah: [{
    reference: String,
    narrator: String,
    text: String,
    commentary: String
  }],
  conclusion: { type: String }
});

module.exports = mongoose.model('Answer', AnswerSchema);
