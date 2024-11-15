const expressRequire = require('express');
const mongoose = require('mongoose');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const expressApp = expressRequire();

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER


//BDD CONNEXION ---------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  
    expressApp.get((req,res) =>{res.send( 'Votre requête a bien été reçue !'
  );}); 
  
  
  expressApp.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
//MIDDLEWARE------------------------------------------------
expressApp.use(bodyParser.json());
expressApp.use(cors());
//ROUTES--------------------------------------------------------
//CONNEXION BACKEND ET AUTHENTIFICATION
//expressApp.use('/',require('./bcktest/backroutes/authRoutes'))
const userRoutes = require('./routes/userRoutes');
expressApp.use('/', userRoutes);

  //PORT CONNEXION-------------------------------------------------
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.MY_BCK_PORT || 4000)  

expressApp.listen(
    port,() =>{
        console.log(`Server is running on port ${port}`);
    }
);



  /*

    //expressApp.use(
      cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );*/

//ROUTERS
