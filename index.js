const express=require('express')
const mongoose = require('mongoose')

const cors = require("cors")
const routes = require("./routes/Route")
const app = express()
const dotenv = require("dotenv")

dotenv.config();

const PORT =  5000
// var corsOptions = {
//     origin: 'https://chitthi.vercel.app',
//     optionsSuccessStatus: 200 // For legacy browser support
// }

app.use(express.json())
app.use(cors());


mongoose.connect(process.env.URI).then(()=>console.log("connected")).catch((err)=>console.log(err))

app.use("/",routes);

app.listen(PORT,console.log("Listening at " + PORT))

