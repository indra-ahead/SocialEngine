import Joi from "joi";
import joiObjectid from "joi-objectid";
// import { REPORT_TYPE } from "../config/constant.js";
Joi.ObjectId = joiObjectid(Joi);


export const signupSchema = (data) => {
        const schema = Joi.object({
          email: Joi.string().email().required(),
          username: Joi.string().required(),
          displayname:Joi.string().required(),
          password: Joi.string().min(5).required(),
          language: Joi.string().required(),
        });
        return schema.validate(data);
};

export const loginSchema = (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().min(5).required(),
    });
    return schema.validate(data);
};