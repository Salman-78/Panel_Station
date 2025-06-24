const adminMiddleware = async(req, res, next) =>{
    try {
        // console.log("Admin Check:", req.user);
        const isAdmin  = req.user.isAdmin;
        if(!isAdmin){
            return res.status(403).json({msg: "user is not admin"})
        }
        next();
    } catch (error) {
        next(error);
    }
}
module.exports=adminMiddleware;