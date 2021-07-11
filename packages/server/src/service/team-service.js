const TeamModel = require('../models/team-model');
const UserModel = require('../models/user-model');
const VoteService = require('./vote-service');
const UserDto = require('../dtos/user-dto');
const TeamDto = require('../dtos/team-dto');
const ApiError = require('../exceptions/api-error');

class TeamService {
  async create(title, logo) {
    const candidate = await TeamModel.findOne({ title });
    if (candidate) {
      throw ApiError.BadRequest(`Komanda ${title} jau egzistuoja`);
    }

    const team = await TeamModel.create({ title, logo });
    const teamDto = new TeamDto(team);

    return { team: teamDto };
  }

  async votePlus(teamId, userId) {
    const team = await TeamModel.findById(teamId);
    if (!team) {
      throw ApiError.BadRequest('Komanda nerasta');
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      throw ApiError.BadRequest('Vartotojas nerastas');
    }

    const userDto = new UserDto(user);
    const teamDto = new TeamDto(team);

    await VoteService.saveVotePlus(teamDto.id, userDto.id);
    return { team: teamDto, user: userDto };
  }

  async voteMinus(teamId, userId) {
    const team = await TeamModel.findById(teamId);
    if (!team) {
      throw ApiError.BadRequest('Komanda nerasta');
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      throw ApiError.BadRequest('Vartotojas nerastas');
    }

    const userDto = new UserDto(user);
    const teamDto = new TeamDto(team);

    await VoteService.saveVoteMinus(teamDto.id, userDto.id);
    return { team: teamDto, user: userDto };
  }

  async getAllTeams() {
    const teams = await TeamModel.find();
    return teams;
  }
}

module.exports = new TeamService();
