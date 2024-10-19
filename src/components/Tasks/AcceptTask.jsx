import { useState } from 'react';
import CompleteTask from '../Tasks/CompleteTask'; // Make sure these components exist
import FailedTask from '../Tasks/FailedTask';

const AcceptTask = ({ data }) => {
  const [taskStatus, setTaskStatus] = useState(null); // To keep track of the task status

  // Check if the task is completed or failed
  if (taskStatus === 'completed') {
    return <CompleteTask data={data} />;
  } else if (taskStatus === 'failed') {
    return <FailedTask data={data} />;
  }

  return (
    <>
      <div className='p-5 flex-shrink-0 h-fit md:h-full w-[70%] md:w-[300px] bg-[#fabc49] rounded-xl'>
        <div className='flex justify-between items-baseline pb-1 border-b border-white/50'>
          <h3 className='font-semibold text-2xl'>{data.category}</h3>
          <p className='font-light text-sm'>{data.taskDate}</p>
        </div>
        <h1 className='mt-5 text-lg font-extralight'>{data.taskTitle}</h1>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-5 space-x-5'>
          <button 
            className='bg-green-600 px-2 py-1 rounded-lg hover:bg-green-800'
            onClick={() => setTaskStatus('completed')}
          >
            Completed
          </button>
          <button 
            className='bg-red-600 px-2 py-1 rounded-lg hover:bg-red-800'
            onClick={() => setTaskStatus('failed')}
          >
            Failed
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
