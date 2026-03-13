
const errorHandler = (err,req, res, next) => {
    res.status(err.statusCode || 500).json({status: "Fail", message: err.message || "Internal Server Eror"})
}

module.exports = errorHandler;