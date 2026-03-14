

const bcrypt = require("bcrypt");
const { User, Store, Location, Assets, Pricing } = require("../models");
const asyncWrapper = require("../utilities/asyncWrapper");
const { successResponse } = require("../utilities/responseHandler");

const createStore = asyncWrapper(async (req, res) => {

    const body = req.body;
    const files = req.files;

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
        password: hashedPassword,
        street_address: body.street_address,
        flat_no: body.flat_no,
        city: body.city,
        postal_code: body.postal_code,
        profile_photo: files.profile_photo?.[0]?.filename || null
    });

    const newStore = await Store.create({
        store_name: body.store_name,
        store_email: body.store_email,
        store_phone: body.store_phone,
        store_description: body.store_description,
        store_type: body.store_type,
        number_of_locations: body.number_of_locations,
        time_zone: body.time_zone,
        opening_time: body.opening_time,
        closing_time: body.closing_time,
        UserId: user.id
    });

    await Location.create({
        street_address: body.street_address,
        area: body.area,
        city: body.city,
        postal_code: body.postal_code,
        latitude: body.latitude,
        longitude: body.longitude,
        StoreId: newStore.id
    });

    await Assets.create({
        store_logo: files.store_logo?.[0]?.filename || null,
        banner_image: files.banner_image?.[0]?.filename || null,
        business_document: files.business_document?.[0]?.filename || null,
        StoreId: newStore.id
    });

    await Pricing.create({
        termsAccepted: body.termsAccepted,
        subscribeUpdates: body.subscribeUpdates,
        StoreId: newStore.id
    });

    successResponse({
        res,
        data: {
            user_id: user.id,
            store_id: newStore.id
        },
        message: "Store created Successfully"
    });

});

module.exports = createStore;