import express, { Request, Response } from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import File from './models'
dotenv.config()

const app = express()

//MongoDB database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI as string)
  console.log('Connected to MongoDB successfully!')
}
connectDB()

// Routes
app.get('/', (req: Request, res: Response) => {
  console.log('Hello form home route!')
  res.send('Hello form home route!')
})

app.get('/images', async (req: Request, res: Response) => {
  try {
    const results = await File.find({})
    const files = results.map(result => (result.fileName))    
    res.status(200).json(files)
  } 
  catch (error) {
    res.send(`error, something went wrong: ${error}`)
  } 
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in on port ${PORT}`))