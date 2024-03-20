import Joi from "joi";
import joiObjectid from "joi-objectid";
import { IMAGE_TYPES, LANGUAGES, REGEX } from "../constants/constants.js";
// import { REPORT_TYPE } from "../config/constant.js";
Joi.ObjectId = joiObjectid(Joi);


export const signupSchema = (data) => {
        const schema = Joi.object({
          email: Joi.string().email().required(),
          username: Joi.string().regex(REGEX.username).error(new Error("Enter valid username")).required(),
          displayname:Joi.string().regex(REGEX.name).error(new Error("Enter valid displayname")).required(),
          password: Joi.string().min(5).regex(REGEX.password).error(new Error("Enter strong password")).required(),
          confirmPassword: Joi.string().min(5).valid(Joi.ref('password')).error(new Error('Passwords must match')).required(),
          language: Joi.string().valid(...Object.values(LANGUAGES)).required(),
          imageType: Joi.string().valid(...IMAGE_TYPES)
        });
        return schema.validate(data);
};

export const loginSchema = (data) => {
  const schema = Joi.object({
      username: Joi.string().allow(''),
      email: Joi.string().allow(''),
      password: Joi.string().required(),
  });

  return schema.validate(data);
};