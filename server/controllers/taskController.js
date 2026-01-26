import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    
    try {
        const { heading, description } = req.body;
        console.log(req.body);
        
        await Task.create({
            heading,
            description
        })

        res.json({
            success: true,
            message: "Task created"
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
        
    }
}

export const fetchTask = async(req,res) => {
    try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      tasks
    });
    } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}