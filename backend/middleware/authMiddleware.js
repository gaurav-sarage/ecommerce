import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import user from '../models/userModel.js'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token 

    console.log(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) 
    {
        try{
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch(error) {
            console.error(error)
            res.status(401)

            throw new Error('Not Authorised, token failed')
        }
    }
    

    if(!token){
        res.status(401)
        throw new Error('NOT AUTHORISED, NO TOKEN')
    }

})

export { protect }