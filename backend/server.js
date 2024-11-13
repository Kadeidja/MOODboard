const expressRequire = require('express');
const expressApp = expressRequire();
const mongoose = require('mongoose');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER

expressApp.use(bodyParser.json());
//PORT CONNEXION
expressApp.use(cors());
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

//BDD CONNEXION FOR USERS

mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
,

    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  
    expressApp.get((req,res) =>{res.send( 'Votre requête a bien été reçue !'
  );});
  
  expressApp.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });



//...

/*
const uri = `mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


expressApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

expressApp.get('/', function(req, res) {
  res.send('Hello World from the backend side. Dont forget that on this side, every console log is only visible on the IDE terminal.');
})*/


//ROUTERS
const testRouter = require('./backroutes/testRoute')

//MIDDLEWARE
expressApp.use("/", testRouter);
expressApp.use("/test", testRouter);

module.exports = expressApp;