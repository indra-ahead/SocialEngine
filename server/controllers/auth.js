import * as validation from "../validation/auth.js"
import { IMAGE_TYPES, LANGUAGES, REGEX, STATUS_CODE } from "../constants/constants.js";
import { comparePasswords, hashPassword} from "../utils/converters.js";
import {  createUserQuery,  userFindQuery } from "../schema/userQuery.js";
import { formValidator } from "../utils/common.js";
import { FORMS } from "../utils/forms.js";


export const getSignup = async (req, res, next) => {
    try {
      res.status(200).json({form:FORMS.signUpForm})
    } catch (error) {
      next(error);
    }
  };

  export const signup = async (req, res, next) => {
     let {password,username,email} = req.body;
    try {
     const isValid = formValidator("signUpForm",req.body);
     if (!isValid.success) {
      return res
        .status(STATUS_CODE.bad_request)
        .json({ success: false, message: isValid.message });
    }
    const userExist = await userFindQuery({username,email});
    if(userExist.success){
         return res.status(STATUS_CODE.bad_request).json({success:false,message:"User already exist with this username/email"})
    }
      password = await hashPassword(password);
      const response = await createUserQuery({...req.body,password:password});
     if(!response.success)
          return res.status(STATUS_CODE.server_error).json({success:false,message:response.message});
     res.status(STATUS_CODE.success).json({success:true,data:response.data})

       res.status(STATUS_CODE.success).json({...isValid})
    } catch (error) {
      next(error);
    }
  };

  export const getLogin = async (req, res, next) => {
    try {
     res.status(200).json({message:"logged In", form:loginForm})
    } catch (error) {
      next(error);
    }
  };

  export const login = async (req, res, next) => {
    const {password,name}  = req.body;
    try {
      const isValid = formValidator("loginForm",req.body);
      if (!isValid.success) {
        return res
          .status(STATUS_CODE.bad_request)
          .json({ success: false, message: isValid.message });
      }
      const response = await userFindQuery({username:name,email:name});
      if(!response?.data)
             return res.status(STATUS_CODE.server_error).json({success:false,message:"User not exist"});

      const isMatched = await comparePasswords({password,hashedPassword:response.data.password});
      if(!isMatched)
            return res.status(STATUS_CODE.bad_request).json({success:false,message:"Incorrect Password"});

      return res.status(STATUS_CODE.success).json({
        success:true,
        data:response.data
      })
    } catch (error) {
      next(error);
    }
  };




  
