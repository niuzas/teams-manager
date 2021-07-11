const teamService = require('../service/team-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class TeamController {
  async create(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Klaida validuojant', errors.array()));
      }
      const { title, logo } = req.body;
      const teamData = await teamService.create(title, logo);
      return res.json(teamData);
    } catch (e) {
      next(e);
    }
  }

  async vote(req, res, next) {
    try {
      const { team, user } = req.body;
      const teamData = await teamService.vote(team, user);
      return res.json(teamData);
    } catch (e) {
      next(e);
    }
  }

  async getTeams(req, res, next) {
    try {
      const teams = await teamService.getAllTeams();
      return res.json(teams);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TeamController();
