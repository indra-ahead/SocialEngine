import db from "../db/index.js"

export const createUserQuery = async ({username,password,displayname,language,email})=>{
    try {

      let values = {}
      const query = `INSERT INTO engine4_users (username, email, language, password, displayname)
      VALUES ('${username}', '${email}', '${language}', '${password}', '${displayname}')`;

       const response = await db.query(query);
       console.log(response,"response after saving")
       if(!response)
            return {success:false,message:"somthing went wrong"};

       return {success:true,data:response[0]};
    } catch (error) {
       return {success:false,message:error.message}
    }
}


export const userFindQuery = async ({username,email})=>{
   try {
      const where = `email='${email}' OR username='${username}'`;
      const query  = `SELECT * FROM engine4_users WHERE ${where}`;
      const [response,error] = await db.query(query);
      if(!response[0])
           return {success:false,message:"somthing went wrong"};

      console.log(response,"user details");
      return {success:true,data:response[0]};
   } catch (error) {
      console.log(error,"error");
      return {success:false,message:error.message}
   }
}