const voteModel = require('../models/vote-model');
const ApiError = require('../exceptions/api-error');

class VoteService {
  async saveVote(teamId, userId) {
    const voteData = await voteModel.findOne({ team: teamId, user: userId });
    if (voteData) {
      console.log('Vote exist');
      throw ApiError.BadRequest(`Toks balsas jau egzistuoja su ID ${voteData._id}`);
    }
    const vote = await voteModel.create({ team: teamId, user: userId });
    console.log('Vote saved');
    return vote;
  }

  async removeVote(voteId) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  async findVote(userId, teamId) {
    //const voteData = await tokenModel.findOne({ refreshToken });
    return voteData;
  }
}

module.exports = new VoteService();
