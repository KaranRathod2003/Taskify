import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";
dotenv.config(
    {
        path:'./.env'
    }
);

const PORT = process.env.PORT || 5000
connectDB()
.then(()=>{
    // app.listen(PORT, ()=>{
    //     console.log(` 🚀  SERVER IS RUNNING... ON: ${PORT || 5000}`)
    // })
    console.log('✅ MongoDB Connected');
})
.catch((err)=>{
    console.log("❌ MONGODB Connection Failed", err);
})

// temporary check
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ Backend is running!',
    status: 'OK' 
  });
});


export default app;