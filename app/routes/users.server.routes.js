const users = require('../../app/controllers/users.server.controller');

module.exports = app => {
  app.route('/users')
    .post(users.signup);

  app.route('/users/email/:userID')
    .get(users.checkEmailVerified)
    .post(users.sendEmailForVerified)
    .put(users.verifyEmail);

};
