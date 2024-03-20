
import { FORMS} from "./forms.js";

export const getUploadFileUrl = (type = "media") => {
    const date = new Date();
    return `uploads/${type}/${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
  };


  export const formValidator = (formType, data) => {
   const form = FORMS[formType];
   let isValid = { success: true };
   for (let i = 0; i < form.length; i++) {
      if(!isValid.success) break;
       const element = form[i];
       const { validations } = element;
       if (validations) {
           for (let j = 0; j < validations.length; j++) {
               const validation = validations[j];
               const validated = validateCheck(validation, data[element.name], element, data);
               if (validated?.success === false) {
                  isValid = validated;
                   break; 
               }
           }
       }
     
   }
   return isValid;
}

  const validateCheck =(validation,value,element,data)=>{
   switch(validation.type){
       case "required" :{
          if(!value)
            return {success:false,message:validation.errorMessage}
          break;
       }
       case "regex" :{
          const regex = validation.regex;
           if(!regex.test(value))
                return {success:false,message:validation.errorMessage}
          break;
       }
       case "selectOptions" :{
          const isMatched = element.options.find((option)=>option.value === value);
          if(!isMatched){
            console.log(value,element.name,validation.type,"value")
              return {success:false,message:validation.errorMessage}
            }
          break;
       }
      case "matchField" :{
         console.log(value,data[validation.field],validation,"password match")
          if(value  !== data[validation.field])
                return {success:false,message:validation.errorMessage}

          break;
      }
      //  case "uploadType" :{
      //     const isMatched = element.allowedTypes.find((type)=>type === value.mimeType);
      //     if(!isMatched)
      //         return {success:false,message:validation.errorMessage}
      //  }
      default:{
          return {success:true}
      }
   }
     
      
 }