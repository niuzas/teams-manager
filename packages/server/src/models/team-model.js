const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  title: { type: String, unique: true, required: true },
  logo: { type: String, unique: false, required: true },
  score: { type: Number, default: 0 },
});

module.exports = model('Team', TeamSchema);
