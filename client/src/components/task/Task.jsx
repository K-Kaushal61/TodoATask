import React from "react";
import { ArrowRight } from "lucide-react";


const Task = ({ task }) => {
  return (
    <div className="task bg-black p-2 rounded-xl mb-2">
      <h3 className="text-white font-semibold">
        {task.heading}
      </h3>

      <p className="text-gray-300 text-sm">
        {task.description}
      </p>
    </div>
  );
};

// const Task = ({
//   heading,
//   description,
//   onHeadingChange,
//   onDescriptionChange,
//   task
// }) => {
//   return (
//     <div className="task flex flex-col bg-black p-2 gap-2 rounded-xl h-50">

//       <div className="taskheading flex">
//         <input
//           value={heading}
//           onChange={(e) => onHeadingChange(e.target.value)}
//           className="text-white placeholder:text-gray-300 outline-0 w-full"
//           maxLength={50}
//           placeholder="Heading"
//           type="text"
//         />

//         {heading !== "" && description !== "" && (
//           <div className="bg-green-400 flex items-center px-1 rounded-2xl cursor-pointer">
//             <p className="text-sm tracking-tight font-semibold">
//               ongoing
//             </p>
//             <ArrowRight color="black" size={16} />
//           </div>
//         )}
//       </div>

//       <div className="taskdescription flex flex-wrap">
//         <textarea
//           value={description}
//           onChange={(e) => onDescriptionChange(e.target.value)}
//           maxLength={120}
//           rows={6}
//           className="text-white resize-none placeholder:text-gray-300 outline-0 w-full"
//           placeholder="Description..."
//         />
//       </div>
//     </div>
//   );
// };

export default Task;
