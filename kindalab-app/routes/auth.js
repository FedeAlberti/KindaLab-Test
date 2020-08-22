const { Router } = require('express');
const { check } =require('express-validator')
const { validateFields } = require('../middlewares/validate-fields')
const { newUser, loginUser } = require('../controllers/auth');
const router =Router();

/*
    Route:
    host + /api/auth
*/

router.post(
    '/new',
     [
        check('name','Name is required ').not().isEmpty(),
        check('email','email is required ').isEmail(),
        check('password','The minimum password length is 6 characters').isLength({min:6}),
        validateFields,
     ] ,
      newUser);

router.post(
    '/',
    [
        check('email','email is required ').isEmail(),
        check('password','The minimum password length is 6 characters').isLength({min:6}),
        validateFields,
    ],
     loginUser);

module.exports = router;