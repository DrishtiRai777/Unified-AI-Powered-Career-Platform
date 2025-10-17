import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/jobTracker", jobRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
