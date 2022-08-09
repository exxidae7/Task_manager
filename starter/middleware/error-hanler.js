const CustomAPIError = require('../error/custom-error')

const errorHandlerMiddleware = (err, req, res, next) =>{
     if (err instanceof CustomAPIError){
          return res.status(err.status).json({ msg : err.message })
     }
     return res.status(500).json({ msg: 'f your mum' })
}

module.exports = errorHandlerMiddleware