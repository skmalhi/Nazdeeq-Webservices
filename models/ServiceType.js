
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ServiceType = new Schema({
    vehicleId: {type: String, required: true},
    pricePerDistance: {type: String, required: true},
    pricePerTime: {type: String, required: true},
    serviceType: {type: String, required: true},
    priceCalculationType: {type: String, required: true}
}); 

module.exports = mongoose.model("ServiceType", ServiceType);