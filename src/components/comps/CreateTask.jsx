const CreateTask = () => {

  const submitHandler = () => {}

  return (
    <div className='flex justify-center items-center my-5 w-full'>
            <form className='w-full md:w-fit flex flex-col md:grid md:grid-cols-2 justify-between items-start bg-zinc-900 p-5 rounded-2xl'>
                <div>
                <div className='mb-4 space-y-2'> 
                  <h3>Task Title:</h3>
                  <input className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Make a UI Design' />
                </div>
               
                 <div className='mb-4 space-y-2'>
                   <h3>Date:</h3>
                   <input className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='date' />
                </div>
                <div className='mb-4 space-y-2'>
                  <h3>Asign To:</h3>
                  <input className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Employee name.' />
                </div>
                <div className='mb-4 space-y-2'>
                  <h3>category:</h3>
                  <input className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Design, UI, Code, etc' />
                </div>
                </div>
                <div className='flex flex-col justify-between h-full'>
                <div className='mb-4 space-y-2'>
                 <h3>Description:</h3>
                 <textarea className='bg-zinc-800 outline-none rounded-lg' name='' id='' cols='30' rows='5'/>
                </div>
                <div className='p-5 flex items-center justify-center'>
                <button className='bg-blue-600 py-1 px-2 rounded-lg mt-5 hover:bg-blue-500'>
                 Create Task</button>
                </div>
                </div>
            </form>
        </div>
  )
}

export default CreateTask