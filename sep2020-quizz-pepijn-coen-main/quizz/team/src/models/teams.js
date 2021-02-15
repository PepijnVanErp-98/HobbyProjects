const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  room: { type: Number, required: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  answer: { type: String, required: false },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = { teamSchema };
