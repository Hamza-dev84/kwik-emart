
const successResponse = ({res, data, message="Success"}) => {
    return res.status(201).json({
        success: true,
        message: message,
        data: data
    });
}

const errorResponse = ({res, data, message="Fail", status=500}) => {
    res.status(status).json({
        success: false,
        message: message
    });
}

module.exports = {
    successResponse,
    errorResponse
}