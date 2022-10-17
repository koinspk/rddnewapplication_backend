const user = require('./user/user.service.js');
const template = require('./template/template.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(template);
};
