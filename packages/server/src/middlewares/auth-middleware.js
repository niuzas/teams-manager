const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError('!authorizationHeader'));
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError('!accessToken - access token not found in authorizationHeader'));
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError('!userData - access token is expired or not correct'));
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError(`${e} (from catch)`));
  }
};
