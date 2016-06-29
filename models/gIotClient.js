var mqtt = require('mqtt');
var settings = require('../settings');

var hostname = '52.193.146.103';
var portNumber = 80;
var client_Id = '200000107-generic-service';
var name = '200000107';
var pw = '09255143';
var mytopic = 'client/200000107/200000107-GIOT-MAKER';

var options = {
	port:settings.gIotPort,
    host: settings.gIotHost,
    clientId:settings.client_Id,
    username:settings.name,
    password:settings.pw,
    keepalive: 60,
	reconnectPeriod: 1000,
	protocolId: 'MQIsdp',
	protocolVersion: 3,
	//clean: true,
	encoding: 'utf8'
};

var GIotClient = mqtt.connect(options);

module.exports = GIotClient;