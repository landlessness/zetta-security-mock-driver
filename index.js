var Device = require('zetta-device');
var util = require('util');

var Security = module.exports = function() {
  Device.call(this);
};
util.inherits(Security, Device);

Security.prototype.init = function(config) {
  config
    .name('Security')
    .state('disarmed')
    .type('security')
    .when('disarmed', {allow: ['arm-stay', 'arm-away']})
    .when('armed-stay', {allow: ['disarm']})
    .when('armed-away', {allow: ['disarm']})
    .map('arm-stay', this.armStay)
    .map('arm-away', this.armAway)
    .map('disarm', this.disarm);
};

Security.prototype.armStay = function(cb) {
  this.state = 'armed-stay';
}

Security.prototype.armAway = function(cb) {
  this.state = 'armed-away';
}

Security.prototype.disarm = function(cb) {
  this.state = 'disarmed'
}