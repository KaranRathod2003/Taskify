const dotenv = require('dotenv');
const { default: connectDB } = require('./config/db');
const { app } = require('./app');
dotenv.config();

const PORT = process.env.PORT
connectDB()
.then(()=>{
    app.listen(PORT || 5000, ()=>{
        console.log(`   SERVER IS RUNNING... ON: ${PORT || 5000}`)
    })
})
.catch((err)=>{
    console.log("MONGODB Connection Failed", err);
})

