const { body, param, validationResult } = require("express-validator");
const { getUserbyEmail } = require("../Model/user")
const bcrypt = require("bcrypt"); 

const { ObjectId } = require('mongodb')

exports.validateCreate = [
  body('login').trim().notEmpty().isEmail(), 
  body('password').trim().notEmpty()
];

exports.validateErrorUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next(); 
};
exports.validateDuplicatedEmail = async (req, res, next) => {
  const {login} = req.body
  const {data} = await getUserbyEmail(login)
  if(data) return res.status(400).json({message: 'E-mail duplicado!'})
  return next()
}