// import express from "express"
// import { PORT, mongoDBURL } from "./src/config.js";
// import { connectDB } from "./src/config/ConnectDB.js";
// import bookRoutes from "./src/routes/bookRoutes.js";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // app.use(cors({

// //     origin: "http://localhost:5173",
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type'],

// // })
// // )

// app.get('/', (req, res) => {
//     console.log(req);
//     return res.status(234).send('welcome to mern stack tutorial')

// })

// connectDB(mongoDBURL);

// app.use("/books", bookRoutes)

// app.listen(PORT, () => {
//     console.log(`Server is listen ${PORT}`);

// });




// //tsandhya911_db_user
// //b2mialaeBOtVAQnN
// //mongodb+srv://tsandhya911_db_user:b2mialaeBOtVAQnN@cluster0.s1crcnx.mongodb.net/?appName=Cluster0


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./src/config/ConnectDB.js";
// import bookRoutes from "./src/routes/bookRoutes.js";

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to MERN Book Store API");
// });

// // database connect
// connectDB();

// app.use("/books", bookRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/ConnectDB.js";
import bookRoutes from "./src/routes/bookRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN Book Store API");
});

// connect database
connectDB();

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-store-mern-two.vercel.app",
    ],
  })
);