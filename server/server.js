import express from 'express';
import cors from 'cors';
import taskRouter from './routes/TaskRoutes.js';
import connectDB from './configs/db.js';


const app = express();

await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/task', taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
