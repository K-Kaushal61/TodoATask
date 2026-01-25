import express from 'express';

const taskRouter = express.Router();

taskRouter.post('/create', createTask);

export default taskRouter;