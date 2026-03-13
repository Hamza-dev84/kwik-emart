const Store = require("./store");
const User = require("./user");
const Location = require("./location");
const Assets = require("./Assets");
const Pricing = require("./Pricing");



User.hasMany(Store);
Store.belongsTo(User);

Store.hasMany(Location);
Location.belongsTo(Store);

Store.hasOne(Assets);
Assets.belongsTo(Store);

Store.hasOne(Pricing);
Pricing.belongsTo(Store);

module.exports = {
    Store,
    User,
    Location,
    Assets,
    Pricing
}