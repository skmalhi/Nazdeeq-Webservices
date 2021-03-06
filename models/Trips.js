
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Trips = new Schema({
    source: {type: String, required: true},
    destination: {type: String, required: true},
    time: {type: String, required: true},
    fare: {type: String, required: true},
    date: {type: Date, required: true},
    status: {type: Boolean, required: true},
    Driver: {type: Schema.Types.ObjectId, required: true, ref: 'Driver'},
    User: {type: Schema.Types.ObjectId, required: true, ref: 'User'}}); 

    module.exports = mongoose.model("Trips", Trips);