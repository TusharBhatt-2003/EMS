import { useState } from 'react';
import AcceptTask from './AcceptTask'; // Assuming AcceptTask is in the same folder

const FailedTask = ({ data }) => {
  const [isFailed, setIsFailed] = useState(true); // Manage the state of the task

  // Handle the "Try Again" button click to switch back to AcceptTask
  const handleTryAgain = () => {
    setIsFailed(false); // Set to false to display AcceptTask again
  };

  // If the task is no longer failed, render the AcceptTask component
  if (!isFailed) {
    return <AcceptTask data={data} />;
  }

  return (
    <>
      <div className='p-5 flex-shrink-0 h-fit md:h-full w-[70%] md:w-[300px] bg-[#ff3e3e] rounded-xl'>
        <div className='flex justify-between items-baseline pb-1 border-b border-white/50'>
          <h3 className='font-semibold text-2xl'>{data.category}</h3>
          <p className='font-light text-sm'>{data.taskDate}</p>
        </div>
        <h1 className='mt-5 text-lg font-extralight'>{data.taskTitle}</h1>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-5 space-x-5'>
          <button
            className='bg-yellow-600 px-2 py-1 rounded-lg hover:bg-yellow-800'
            onClick={handleTryAgain} // Switch back to AcceptTask on click
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
};

export default FailedTask;
