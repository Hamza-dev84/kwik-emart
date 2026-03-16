
const bcrypt = require("bcrypt");
const {Driver, DriverAvailability, DriverDocument, DriverEarnings, DriverVehicle} 
= require("../models");

const asyncWrapper = require("../utilities/asyncWrapper");
const {successResponse} = require("../utilities/responseHandler");

const f = (files, field) => files?.[field]?.[0]?.filename || null;

const createDriver = asyncWrapper(async (req, res) => {
    const body = req.body;
    const files = req.files;

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const driver = await Driver.create({
        first_name: body.first_name,
        middle_name: body.middle_name,
        last_name: body.last_name,
        date_of_birth: body.date_of_birth,
        gender: body.gender,
        nationality: body.nationality,
        national_insurance_no: body.national_insurance_no,
        work_rights: body.work_rights,
        email_address: body.email_address,
        phone_no: body.phone_no,
        password: body.password,
        street_address: body.street_address,
        flat_no: body.flat_no,
        city: body.city,
        postcode: body.postcode,
        contact_name: body.contact_name,
        relationship: body.relationship,
        emergency_phone_no: body.emergency_phone_no,
        profile_photo: f(files, "profile_photo")
    });

    await DriverVehicle.create({
        vehicle_type: body.vehicle_type,
        make: body.make,
        model: body.model,
        year: body.year,
        colour: body.colour,
        registration_plate: body.registration_plate,
        engine_size: body.engine_size,
        fuel_type: body.fuel_type,
        have_delivery_bag: body.have_delivery_bag,
        smartphone_os: body.smartphone_os
    });

    await DriverDocument.create({
        id_type: body.id_type,
        id_expiry_date: body.id_expiry_date,
        id_front: f(files, "id_front"),
        id_back: f(files, "id_back"),
        license_no: body.license_no,
        license_category: body.license_category,
        dvla_check_code: body.dvla_check_code,
        license_issue_date: body.license_issue_date,
        license_expiry_date: body.license_expiry_date,
        license_front: f(files, "license_front"),
        license_back: f(files, "license_back"),
        insurer_name: body.insurer_name,
        policy_no: body.policy_no
    })
})