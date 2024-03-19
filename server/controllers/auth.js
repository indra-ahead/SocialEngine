import * as validation from "../validation/auth.js"
import db from "../db/index.js"
export const getSignup = async (req, res, next) => {
 
    try {

      const signupForm=[
        {
           name:"email",
           id:"email",
           type:"email",
           placeholder:"Email",
           required:true,
           validations:[
            {
              type:"regex",
              regex:"/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/",
              errorMessage:"Please enter valid Email id"
          },{
            type:"required",
            errorMessage:"This is required field."
          }
          ],
        },
        {
          name:"username",
          id:"username",
          type:"input",
          validations:[
            {
              type:"regex",
              regex:"^[A-Za-z]+(?:[ -][A-Za-z]+)*$",
              errorMessage:"Please enter username with letter  and number"
          },{
            type:"required",
            errorMessage:"This is required field."
          }
          ],
          placeholder:"username",
          required:true,
       },
       {
        name:"displayname",
        id:"displayname",
        type:"input",
        regex:"^[A-Za-z]+(?:[ -][A-Za-z]+)*$",
        validations:[
          {
            type:"regex",
            regex:"^[A-Za-z]+(?:[ -][A-Za-z]+)*$",
            errorMessage:"Please enter valid display name it should be in letters"
        },{
          type:"required",
          errorMessage:"This is required field."
        }
        ],
        placeholder:"displayname",
          required:true,
       },
       {
        name:"language",
        id:"language",
        type:"select",
        options:[
          {title:"select language",value:""},
          {title:"English",value:"en"},
        ],
        validation:[
          {
            type:"validLanguage",
            check:"options",
            errorMessage:"Select valid language"
          }
        ],
        placeholder:"language",
          required:true,
       },
       {
         name:"photo",
         id:"photo",
         type:"file",
         required:true,
         validations:[
          {
          type:"required",
          errorMessage:"This is required field."
        },
        {
          type:"uploadType",
          allowedTypes:["jpeg","png","gif","webp"],
          errorMessage:"Please upload jpeg,png,gif and webp only."
        }
        ],
       },
       {
         name:"password",
         id:"password",
         type:"password",
         placeholder:"Password",
         required:true,
         validations:[
          {
            type:"regex",
            regex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
            errorMessage:"Please enter valid password value."
        },{
          type:"required",
          errorMessage:"This is required field."
        }
        ],
       },
       {
        name:"confirm-password",
        id:"confirm-password",
        type:"password",
        placeholder:"Match Password",
        validations:[
        {
          type:"required",
          errorMessage:"This is required field."
        },{
          type:"matchField",
          field:"password",
          errorMessage:"Password does not match."
        }
        ],
      }
      ]
     
      res.status(200).json(signupForm)
    } catch (error) {
      next(error);
    }
  };

  export const signup = async (req, res, next) => {
 
    try {
      const { error } = validation.signupSchema(req.body);

      // db.query("",)
      if (error) {
        return res
          .status(STATUS_CODE.bad_request)
          .json({ success: false, message: error.message });
      }
     
    } catch (error) {
      next(error);
    }
  };

  export const getLogin = async (req, res, next) => {
 
    try {

     res.status(200).json({message:"logged In"})
    } catch (error) {
      next(error);
    }
  };

  export const login = async (req, res, next) => {
 
    try {
      const { error } = validation.loginSchema({ story });
      if (error) {
        return res
          .status(STATUS_CODE.bad_request)
          .json({ success: false, message: error.message });
      }
     
    } catch (error) {
      next(error);
    }
  };




  
