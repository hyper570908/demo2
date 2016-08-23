// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demo');

// create a schema
var deviceSchema = new Schema({
  macAddr: { type: String},
  data: { type: String},
  recv_at: { type: Date},
  created_at: { type: Date}
});

// the schema is useless so far
// we need to create a model using it
var Device = mongoose.model('Device', deviceSchema);

// make this available to our users in our Node applications
module.exports = Device;