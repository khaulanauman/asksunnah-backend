require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Answer = require('./models/Answer');

const app = express();
app.use(cors());
app.use(express.json());

// connecting to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// API Route to get question by slug
app.get('/api/questions/:slug', async (req, res) => {
    console.log("Requested slug:", req.params.slug);
  try {
    const answer = await Answer.findOne({ slug: req.params.slug });
    console.log(answer)
    if (!answer) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(answer);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
