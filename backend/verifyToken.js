
import jwt from 'jsonwebtoken'

export const verifyToken = async (req , res , next)=> {

   
        const token = req.cookies.accessToken;

        if(!token)
          return res.status(401).json({message : "you are not authenticated" , success : false})
    

        jwt.verify(token , process.env.JWT_SECRET_KEY , (err , user)=> {
            if(err)
            {
                return res.status(404).json({message : "token is not valid" , success : false})
    
            }
            req.user = user;
            next()
        } )

}

export const verifyUSer = async (req , res , next)=> {
    verifyToken(req , res , next , ()=> { 
        if(req.user.id === req.params.id || req.user.role === "user"){
            next()
        }
        else
        {
            return res.status(401).json({message : "you are not authenticated" , success : false})
    
        }
    })
}

export const verifyAdmin = async (req , res , next)=> {
    verifyToken(req , res , next , ()=> { 
        if(req.user.role === "admin"){
            next()
        }
        else
        {
           return res.status(401).json({message : "you are not authorize" , success : false})
    
        }
    })
}