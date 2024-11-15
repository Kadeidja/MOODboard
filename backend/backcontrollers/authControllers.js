const UsersModel = require('../backmodels/usersmodel')
const testing = (req,res) =>{
    res.json('testing is ok')
}

const subscriptionUser = async(req,res) => {
try {
    //then(response => response.json())
    const {name ,email ,password } =  req.body;
    //On regarde si le le nom est ecrit        name===!typeof(String)
    if(!name){
        return res.json({
            error: 'name is required'
        })
    };
    //On regarde si le password est ok
    if(!password || password.length < 6 ){
        return res.json({
            error:'Password is required and should have more than six characters'
        })
    };
    //On regarde si le mail est déja existant dans la base de donnée
    const existingMail = await UsersModel.findOne({email});
    //Si le mail est déja présent
    if (existingMail) {
        return res.json({
            error:'Email already taken'
        })
    }

//Si toutes les informations présenté semble correcte alors on crée l'utilisateur
const creatingUser = await UsersModel.create({
    name, email, password
})

res.json(creatingUser)

} catch (error) {
    console.log(error)    
}
}

module.exports = {
    testing,
    subscriptionUser
}