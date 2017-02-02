/**
 * Created by maximiliano.dimito on 8/25/2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Person = new Schema({
    name: String,
    lastName: String
},{
    collection:"Person"
});

module.exports = mongoose.model('Person', Person);