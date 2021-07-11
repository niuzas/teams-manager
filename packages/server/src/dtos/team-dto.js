module.exports = class TeamDto {
  id;
  title;
  logo;
  score;

  constructor(model) {
    this.id = model._id;
    this.title = model.title;
    this.logo = model.logo;
    this.score = model.score;
  }
};
