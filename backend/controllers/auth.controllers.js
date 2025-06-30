export const signUpUser = async (req,res)=>{
    try {
const {fullname ,username ,password ,confirmpassword, gender} = req.body
    }catch(error){

    }
    
}

export const  loginUser = (req,res)=>{
    console.log("signup user");
    
}

export const  logoutUser = (req,res)=> {
    console.log("logOut")
    
}