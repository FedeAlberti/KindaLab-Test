const {response} = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/User')

let resp;

const newUser = async(req, res = response) =>{
    resp = res
    const{ email, password} = req.body
    console.log(req.body)
    try {
        let usero = await User.findOne({email});
        if(usero){
            return error400('mail already registered')
        }
        
        usero = new User(req.body)
        
        const salt = bcryptjs.genSaltSync();
        usero.password = bcryptjs.hashSync(password,salt);
        
        await usero.save();

        return success201(usero);

    } catch (error) {      
        return error500(error);
    }
}

const loginUser = async(req, res = response) =>{
    resp = res
    const{ email, password } = req.body
    try {

        const usero = await User.findOne({email});
        
        if(!usero){
            return error400('invalid user')
        }
        
        const validPassword = bcryptjs.compareSync(password, usero.password);

        if (!validPassword){
            return error400('invalid password')
        }

        return success201(usero)
        
    } catch (error) {
        error500(error);
    }

}

const success201 = (usero) =>{
        resp.status(201).json({
        ok:true,
        msg: 'Registered',
        uid:usero.id,
        name:usero.name
    })
}

const error400 = (msg) =>{
    resp.status(400).json({
        ok:false,
        msg: msg,
    })
}

const error500 = (error) =>{
    resp.status(500).json({
        ok:false,
        msg: 'Something goes bad',
        error:error
    })
}


module.exports = {
    newUser,
    loginUser
}