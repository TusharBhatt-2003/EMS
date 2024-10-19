import { useState } from 'react';
import AcceptTask from './AcceptTask'; // Assuming AcceptTask is in the same folder

const NewTask = ({ data }) => {
  const [isNewTask, setIsNewTask] = useState(true); // State to manage switching between components

  // Handle the "Accept Task" button click
  const handleAcceptTask = () => {
    setIsNewTask(false); // Change the state to false to switch to AcceptTask
  };

  // If the task is no longer new, render the AcceptTask component
  if (!isNewTask) {
    return <AcceptTask data={data} />;
  }

  return (
    <>
      <div className='p-5 flex-shrink-0 h-fit md:h-full w-[70%] md:w-[300px] bg-[#8ac3ff] rounded-xl'>
        <div className='flex justify-between items-baseline pb-1 border-b border-white/50'>
          <h3 className='font-semibold text-2xl'>{data.category}</h3>
          <p className='font-light text-sm'>{data.taskDate}</p>
        </div>
        <h1 className='mt-5 text-lg font-extralight'>{data.taskTitle}</h1>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-5 space-x-5'>
          <button
            className='bg-green-600 px-2 py-1 rounded-lg hover:bg-green-800'
            onClick={handleAcceptTask} // Switch to AcceptTask on click
          >
            Accept Task
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTask;
