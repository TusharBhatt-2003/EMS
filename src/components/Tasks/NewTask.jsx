
const NewTask = ({ data }) => {
  return (
    <>
    <div className='p-5 flex-shrink-0 h-fit md:h-full w-[70%] md:w-[300px] bg-teal-600 rounded-xl'>
      <div className='flex justify-between items-baseline  pb-1 border-b border-white/50'>
      <h3 className='font-semibold text-2xl'>{data.category}</h3>
        <p className='font-light text-sm'>{data.taskDate}</p>  
      </div>
      <h1 className='mt-5 text-lg font-extralight'>
      {data.taskTitle}</h1>
      <p className='text-sm mt-2'>
      {data.taskDescription}
      </p>
      <div className="mt-5 space-x-5">
        <button className="bg-green-600 px-2 py-1 rounded-lg hover:bg-green-800">Accept Task</button>
    </div>
    </div> 
    </>
  )
}

export default NewTask