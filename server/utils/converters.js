import bcrypt from 'bcrypt';


export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export const comparePasswords = async ({password, hashedPassword}) =>{
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
       return false;
    }
}