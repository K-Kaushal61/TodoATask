import React, { useState, useEffect } from "react";
import axios from "axios";
import { Check, X } from "lucide-react";
import { toast } from "react-hot-toast";
import Task from "../task/Task";

const Home = () => {

const [tasks, setTasks] = useState([]);
const [heading, setHeading] = useState("");
const [description, setDescription] = useState("");
const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (heading.trim() === "" && description.trim() === "") {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [heading, description]);

  const onSubmitHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/task/create",
        { heading, description }
      );

      const { task } = await axios.get()

      if (data.success) {
        toast.success("Task created");
        setHeading("");
        setDescription("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleCancel = () => {
    setHeading("");
    setDescription("");
  };

  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/task/fetch"
      );

      if (data.success) {
        setTasks(data.tasks);
      }
    } catch (error) {
      toast.error("Failed to load tasks");
    }
  };

  fetchTasks();
}, []);


  return (
    <div className="Main-div flex justify-around gap-6 p-5 h-full w-screen">

      <div className="todo-div bg-red-400 flex flex-col min-h-160 w-screen p-3 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Todo</h1>

          {isEditing && (
            <div className="flex gap-2">
              <Check
                onClick={onSubmitHandler}
                color="white"
                className="cursor-pointer bg-green-500 rounded-2xl p-1"
              />
              <X
                onClick={handleCancel}
                color="white"
                className="cursor-pointer bg-red-500 rounded-2xl p-1"
              />
            </div>
          )}
        </div>

        <hr className="bg-black mt-1 mb-2" />

        {tasks.length === 0 && (
    <p className="text-sm text-gray-700">
      No tasks yet
    </p>
  )}

  {tasks.map(task => (
    <Task key={task._id} task={task} />
  ))}

      </div>

      <div className="todo-div bg-green-400 flex flex-col w-screen p-3 rounded-xl">
        <h1 className="text-2xl font-semibold">Ongoing</h1>
        <hr className="bg-black mt-1 mb-2" />
      </div>

      <div className="todo-div bg-blue-400 flex flex-col w-screen p-3 rounded-xl">
        <h1 className="text-2xl font-semibold">Completed</h1>
        <hr className="bg-black mt-1 mb-2" />
      </div>
    </div>
  );
};

export default Home;
