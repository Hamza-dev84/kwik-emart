const Store = require("./store");
const User = require("./user");
const Location = require("./location");
const Assets = require("./assets");
const Pricing = require("./pricing");

const Driver = require("./driver");
const DriverAvailability = require("./driverAvailability");
const DriverDocument = require("./driverDocument");
const DriverEarnings = require("./driverEarnings");
const DriverVehicle = require("./driverVehicle");



User.hasMany(Store);
Store.belongsTo(User);

Store.hasMany(Location);
Location.belongsTo(Store);

Store.hasOne(Assets);
Assets.belongsTo(Store);

Store.hasOne(Pricing);
Pricing.belongsTo(Store);

Driver.hasOne(DriverVehicle);
DriverVehicle.belongsTo(Driver);

Driver.hasOne(DriverDocument);
DriverDocument.belongsTo(Driver);

Driver.hasOne(DriverAvailability);
DriverAvailability.belongsTo(Driver);

Driver.hasOne(DriverEarnings);
DriverEarnings.belongsTo(Driver);

module.exports = {
    Store,
    User,
    Location,
    Assets,
    Pricing,
    Driver,
    DriverAvailability,
    DriverDocument,
    DriverEarnings,
    DriverVehicle
}