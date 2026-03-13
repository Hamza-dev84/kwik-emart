

const { User, Store, Location, Assets, Pricing } = require("../models");
const asyncWrapper = require("../utilities/asyncWrapper");
const successResponse = require("../utilities/responseHandler");

const createStore = asyncWrapper(async (req, res) => {
    const { personal, store, location, pricing } = req.body;
    const files = req.files;

    const user = await User.create({
        ...personal,
        profile_photo: files.profile_photo?.[0]?.filename || null
    });

    const newStore = await Store.create({
        ...store,
        UserId: user.id
    });

    await Location.create({ ...location, StoreId: newStore.id });
    await Assets.create({
        store_logo: files.store_logo?.[0]?.filename || null,
        banner_image: files.banner_image?.[0]?.filename || null,
        StoreId: newStore.id
    });
    await Pricing.create({
        ...pricing,
        StoreId: newStore.id
    });

        successResponse({res, data: newStore, message: "Store created Successfully"});
});

module.exports =  createStore ;

