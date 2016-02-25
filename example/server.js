var zetta = require('zetta');
var Security = require('../index');

zetta()
  .use(Security)
  .listen(1337);