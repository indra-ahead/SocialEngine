import { IMAGE_TYPES, LANGUAGES, REGEX } from "../constants/constants.js"


export const FORMS = {
  loginForm:[
    {
      name:"name",
      id:"name",
      type:"input",
      validations:[
      {
        type:"required",
        errorMessage:"Username/Email is required field."
      }
      ],
      placeholder:"Username/Email",
      required:true,
   },
   {
    name:"password",
    id:"password",
    type:"password",
    placeholder:"Password",
    required:true,
    validations:[
    {
     type:"required",
     errorMessage:"Password is required field."
   }
   ],
  },
  ],
    
 signUpForm: [
  {
     name:"email",
     id:"email",
     type:"email",
     placeholder:"Email",
     required:true,
     validations:[
      {
        type:"regex",
        regex:/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
        errorMessage:"Please enter valid Email id"
    },{
      type:"required",
      errorMessage:"Email is required field."
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
        regex:REGEX.username,
        errorMessage:"Please enter username with letter  and number"
    },{
      type:"required",
      errorMessage:"username is required field."
    }
    ],
    placeholder:"username",
    required:true,
 },
 {
  name:"displayname",
  id:"displayname",
  type:"input",
  validations:[
    {
      type:"regex",
      regex:REGEX.name,
      errorMessage:"Please enter valid display name it should be in letters"
  },{
    type:"required",
    errorMessage:"displayname is required field."
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
    ...Object.keys(LANGUAGES).map((key)=>{
        return {
           title:key,
           value:LANGUAGES[key]
        }
    })
  ],
  validations:[
    {
      type:"required",
      errorMessage:"language is required field."
    },
    {
      type:"selectOptions",
      check:"options",
      errorMessage:"Select valid language"
    }
  ],
  placeholder:"language",
    required:true,
 },
//  {
//    name:"image",
//    id:"image",
//    type:"file",
//    required:true,
//    validations:[
//     {
//     type:"required",
//     errorMessage:"This image is required field."
//   },
//   {
//     type:"uploadType",
//     allowedTypes:IMAGE_TYPES,
//     errorMessage:"Please upload jpeg,png,gif and webp only."
//   }
//   ],
//  },
 {
   name:"password",
   id:"password",
   type:"password",
   placeholder:"Password",
   required:true,
   validations:[
    {
        type:"required",
        errorMessage:"Password is required field."
      },
    {
      type:"regex",
      regex:REGEX.password,
      errorMessage:"Please enter valid password value."
  }
  ],
 },
 {
  name:"confirmPassword",
  id:"confirm-password",
  type:"password",
  placeholder:"Match Password",
  validations:[
  {
    type:"required",
    errorMessage:"confirmPassword is required field."
  },{
    type:"matchField",
    field:"password",
    errorMessage:"Password does not match."
  }
  ],
}
]}