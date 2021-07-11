const voteModel = require('../models/vote-model');
const teamModel = require('../models/team-model');
const ApiError = require('../exceptions/api-error');

class VoteService {
  async saveVotePlus(teamId, userId) {
    const voteData = await voteModel.findOne({ team: teamId, user: userId });
    if (voteData) {
      console.log('Vote exist');
      throw ApiError.BadRequest(`Jau balsavote už šią komandą - ID ${voteData._id}`);
    }
    const vote = await voteModel.create({ team: teamId, user: userId });
    const teamData = await teamModel.findOne({ _id: teamId });
    console.log('teamData:', teamData);
    teamData.score += 1;
    teamData.save();
    console.log('Vote saved');
    return vote;
  }

  async saveVoteMinus(teamId, userId) {
    const voteData = await voteModel.findOne({ team: teamId, user: userId });
    if (voteData) {
      console.log('Vote exist');
      throw ApiError.BadRequest(`Jau balsavote už šią komandą - ID ${voteData._id}`);
    }
    const vote = await voteModel.create({ team: teamId, user: userId });
    const teamData = await teamModel.findOne({ _id: teamId });
    console.log('teamData:', teamData);
    teamData.score -= 1;
    teamData.save();
    console.log('Vote saved');
    return vote;
  }
}

module.exports = new VoteService();
