import express from 'express';
import { createTask, fetchTask } from '../controllers/taskController.js';


const taskRouter = express.Router();

taskRouter.post('/create', createTask);
taskRouter.get('/fetch', fetchTask);

export default taskRouter;