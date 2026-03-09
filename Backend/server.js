import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// app.use(cors({

//     origin: "http://localhost:5173",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],

// })
// )

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome to mern stack tutorial')

})

connectDB(mongoDBURL);

app.use("/books", bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is listen ${PORT}`);

});












//tsandhya911_db_user
//b2mialaeBOtVAQnN
//mongodb+srv://tsandhya911_db_user:b2mialaeBOtVAQnN@cluster0.s1crcnx.mongodb.net/?appName=Cluster0