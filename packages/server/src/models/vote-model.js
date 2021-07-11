const { Schema, model } = require('mongoose');

const VoteSchema = new Schema({
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Vote', VoteSchema);
