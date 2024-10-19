import { useState } from 'react';

const CompleteTask = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true); // To control visibility of the component

  // Handle the submit button click
  const handleSubmit = () => {
    setIsVisible(false); // Hide the component when submit is clicked
  };

  // If isVisible is false, don't render the component
  if (!isVisible) {
    return null; // This will make the component disappear
  }

  return (
    <>
      <div className='p-5 flex-shrink-0 h-fit md:h-full w-[70%] md:w-[300px] bg-[#59ea3f] rounded-xl'>
        <div className='flex justify-between items-baseline pb-1 border-b border-white/50'>
          <h3 className='font-semibold text-2xl'>{data.category}</h3>
          <p className='font-light text-sm'>{data.taskDate}</p>
        </div>
        <h1 className='mt-5 text-lg font-extralight'>{data.taskTitle}</h1>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-5 space-x-5'>
          <button 
            className='bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-800'
            onClick={handleSubmit} // Handle click event
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CompleteTask;
