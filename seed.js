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
  "slug": "singing_without_music",
  "heading": "Singing Without Musical Instruments in Islam",
  "question": "Can I use famous songs without instruments (the original song contains instruments but I have a ‘vocals only’ version), for my advertisements.",
  "answer": "In the name of Allah, all praise is due to Allah, and may Peace and Blessings be upon the Messenger of Allah (ﷺ). Singing without musical instruments is divided into two types in Islam: a permissible type and a forbidden type.",
  "fromQuran": [],
  "fromSunnah": [
    {
      "reference": "Reported by Muslim:",
      "narrator": "",
      "text": "...Whoever avoids doubtful matters has protected his religion and his honor.",
      "commentary": ""
    },
    {
      "reference": "Reported by Al-Bukhari and Muslim:",
      "narrator": "",
      "text": "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
      "commentary": ""
    }
  ],
  "fromMufassereen": [
    {
      "reference": "Mufassereen (interpreters)",
      "text": "“with your voice” means music. As for singing without music is allowed with conditions which were stated in previous questions."
    }
  ],
  "conclusion": "Therefore, we do not declare all singing without music to be forbidden, but we advise staying away from doubtful matters and turning to more suitable means for spreading knowledge and benefit."
},
{
  "slug": "listening_to_music",
  "heading": "Ruling on listening to clean songs with good lyrics that include music",
  "question": "Is it permissible to listen to clean songs with good lyrics that include music?",
  "answer": "In the Name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, and may peace and blessings be upon the Messenger of Allah (ﷺ). Singing with music is impermissible, it has been established in Sahih bukhari.",
  "fromQuran": [
    {
      "reference": "Surah Isra' (17:64)",
      "text": "And incite [to senselessness] whoever you can among them with your voice and assault them with your horses and foot soldiers and become a partner in their wealth and their children and promise them. But Satan does not promise them except delusion",
      "commentary": ""
    }
  ],
  "fromSunnah": [
    {
      "reference": "Sahih Bukhari 5590",
      "narrator": "",
      "text": "Abu Malik Al-Ash'ari reported that he heard the Prophet (ﷺ) saying, \"From among my followers there will be some people who will consider illegal sexual intercourse, the wearing of silk, the drinking of alcoholic drinks and the use of musical instruments.",
      "commentary": ""
    },
    {
      "reference": "Musnad al-Bazzār 7513",
      "narrator": "",
      "text": "Anas ibn Malik reported: The Messenger of Allah, peace and blessings be upon him, said, “Two voices are cursed in this world and in the Hereafter: a flute at a time of celebration, and wailing at a time of calamity.”",
      "commentary": ""
    }
  ],
  "fromMufassereen": [
    {
      "reference": "Mufassereen (interpreters)",
      "text": "“with your voice” means music. As for singing without music is allowed with conditions which were stated in previous questions."
    }
  ],
  "conclusion": "In light of the authentic evidence from the Qur’an and Sunnah, it is clear that singing accompanied by musical instruments is impermissible in Islam. The warnings mentioned in the hadiths and the interpretation of scholars regarding the voice of Satan make this prohibition evident. However, singing without musical instruments may be allowed under specific conditions, as outlined in previous rulings. A Muslim should strive to avoid doubtful matters and choose what is most pleasing to Allah."
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
