async function registerUser(req,res){
    let data = req.body;
    
    res.send('Success');
}

const AuthController = {
    registerUser
}

module.exports = AuthController;