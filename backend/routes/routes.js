const express = require('express')
const router = express.Router()

const authenticate = require('../middlewares/authenticate')
const errorHandler = require('../middlewares/errorHandler')

// IMPORT //
// const { login, register, logout} = require('../controllers/authController') 

// MULTER <> UPLOAD FILES //
// const uploadOrganizationLogo = require('../middlewares/multerOrganizationLogo')

// AUTHENTICATE NEXT //
// router.use(authenticate)

// ROUTES //
// router.post('/auth/login', login)
// router.post('/auth/register', uploadOrganizationLogo, register)
// router.post('/auth/logout', logout)

// ERROR HANDLER //
// router.use(errorHandler)

module.exports = router