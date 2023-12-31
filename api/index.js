import  express  from "express";
const app = express()
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";



dotenv.config()

mongoose.set('strictQuery',true)
const uri = 'mongodb+srv://arinjoy:arinjoy@cluster0.svt6nr5.mongodb.net/?retryWrites=true&w=majority';
const connect = async () => {
    try{
        await mongoose.connect(uri)
        console.log("Connected to mongoDb!")
    }catch(error){
        console.log(error)
    }
}
app.use(cors({ origin: "https://onlyskills-ui.onrender.com", credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });

app.listen(8800||"https://onlyskills-server.onrender.com",()=>{
    connect()
    console.log("Backend Server is Running!")
})
