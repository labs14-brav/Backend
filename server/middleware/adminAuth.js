const model = require('../models/rootModel');

/**
 * Define middleware
 */

async function adminAuth(req,res,next){
    try {
        const user = await model.getUserByEmail(req.body.email)
        if (user.type == 'admin') {
            next();
        } else {
            res.status(401).json({message:"Unauthorized to access"})
        }
    }  catch(error) {
            res.status(500).json({message: 'Internal Server Error'})
    }
}
/**
 * Export middleware
 */

module.exports = adminAuth
