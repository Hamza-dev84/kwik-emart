
const bcrypt = require("bcrypt");
const {Driver, DriverVehicle, DriverDocument, DriverAvailability, DriverEarnings} = 
require("../models");
const asyncWrapper = require("../utilities/asyncWrapper");
const { successResponse } = require("../utilities/responseHandler");
const { sequelize } = require("../config/db");

const f = (files, field) => files?.[field]?.[0]?.filename || null;

const createDriver = asyncWrapper(async (req, res) => {
    const body = req.body;
    const files = req.files;

    const transaction = await sequelize.transaction();

    try {
        const hashedPassword = await bcrypt.hash(body.password, 12);

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
            password: hashedPassword,
            street_address: body.street_address,
            flat_no: body.flat_no,
            city: body.city,
            postcode: body.postcode,
            profile_photo: f(files, "profile_photo"),
            contact_name: body.contact_name,
            relationship: body.relationship,
            emergency_phone_number: body.emergency_phone_number,
        }, { transaction });

        await DriverVehicle.create({
            vehicle_type: body.vehicle_type,
            make: body.make,
            model: body.model,
            year: body.year,
            colour: body.colour,
            registration_plate: body.registration_plate || null,
            engine_size_cc: body.engine_size_cc || null,
            fuel_type: body.fuel_type,
            have_delivery_bag: body.have_delivery_bag,
            smartphone_os: body.smartphone_os,
            DriverId: driver.id
        }, { transaction });

        await DriverDocument.create({
            id_type: body.id_type,
            id_expiry_date: body.id_expiry_date,
            id_front: f(files, "id_front"),
            id_back: f(files, "id_back"),

            license_no: body.license_no || null,
            license_category: body.license_category || null,
            dvla_check_code: body.dvla_check_code || null,
            license_issue_date: body.license_issue_date || null,
            license_expiry_date: body.license_expiry_date || null,
            license_front: f(files, "license_front"),
            license_back: f(files, "license_back"),

            insurer_name: body.insurer_name || null,
            policy_no: body.policy_no || null,
            policy_start_date: body.policy_start_date || null,
            policy_expiry_date: body.policy_expiry_date || null,
            insurance_certificate: f(files, "insurance_certificate"),

            bank_name: body.bank_name,
            account_holder_name: body.account_holder_name,
            sort_code: body.sort_code,
            account_no: body.account_no,
            bank_statement_upload: f(files, "bank_statement_upload"),
            right_to_work_document: f(files, "right_to_work_document"),

            DriverId: driver.id
        }, { transaction });

        await DriverAvailability.create({
            selected_day: body.selected_day,
            start_time: body.start_time,
            finish_time: body.finish_time,
            hours_per_week: body.hours_per_week,
            employment_type: body.employment_type,
            primary_delivery_area: body.primary_delivery_area,
            max_delivery_radius: body.max_delivery_radius,
            willing_to_cover_additional_areas: body.willing_to_cover_additional_areas === "true",
            previous_delivery_experience: body.previous_delivery_experience === "true",
            platforms_worked_on_before: body.platforms_worked_on_before || null,
            additional_information: body.additional_information || null,
            DriverId: driver.id
        }, { transaction });

        await DriverEarnings.create({
            agree_terms: body.agree_terms === "true",
            consent_background_check: body.consent_background_check === "true",
            info_accurate: body.info_accurate === "true",
            subscribe_updates: body.subscribe_updates === "true",
            DriverId: driver.id
        }, { transaction });


        await transaction.commit();

        successResponse({
            res,
            data: { driver_id: driver.id },
            message: "Driver registered successfully"
        });

    } catch (error) {
        await transaction.rollback();
        throw error;
    }


});

module.exports = createDriver;