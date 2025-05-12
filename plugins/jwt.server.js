import jwt from 'jsonwebtoken'

export default defineNitroPlugin((nuxtApp)=>{
    return {
        provide:{
            verifyJwtToken : (token,secret,options) =>{
                return jwt.verify(token,secret,options)
            }
        }
    }
})