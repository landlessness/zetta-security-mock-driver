var zetta = require('zetta');
var Security = require('../index');

zetta()
  .use(Security)
  .link('http://demo.zettaapi.org')
  .listen(1337);