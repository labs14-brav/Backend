const firebase= require("../initializers/firebase");

module.exports=decodeToken;

function decodeToken(req,res,next){
    
const token=req.body.token;

console.log(process.env.FIREBASE_CONFIG);

if(token){
    firebase.auth().verifyIdToken(token)
    .then(decodeToken=>{

        req.body.email= decodeToken.email;
        req.body.uid= decodeToken.uid;
        next();

    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:"internal server error"});
    })

}else{
    res.status(400).json({message:"not authorized"});
}



}