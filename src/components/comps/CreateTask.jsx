import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTasktitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setaAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Find the employee to assign the task
    const updatedEmployees = userData.employees.map((employee) => {
      if (asignTo === employee.name) {
        // Add the new task to the employee's tasks array

         // Increment the newTasks count if it exists, or initialize it
         const newTasksCount = (employee.taskCounts.newTask || 0) + 1;

        return {
          ...employee,
          tasks: [...employee.tasks, newTask], // Append the new task to existing tasks
          newTasksCount: newTasksCount,  // Increment new tasks count
        };
      }
      return employee;
    });

    // Update the user data context
    setUserData({ ...userData, employees: updatedEmployees });
    console.log(userData.employees);
    
    // Clear form inputs after task creation
    setTasktitle('');
    setTaskDescription('');
    setTaskDate('');
    setaAsignTo('');
    setCategory('');
  };

  return (
    <div className='flex justify-center items-center my-5 w-full'>
      <form 
        onSubmit={submitHandler}
        className='w-full md:w-fit flex flex-col md:grid md:grid-cols-2 justify-between items-start bg-zinc-900 p-5 rounded-2xl'>
        
        <div>
          <div className='mb-4 space-y-2'> 
            <h3>Task Title:</h3>
            <input 
              value={taskTitle}
              onChange={(e) => setTasktitle(e.target.value)}
              className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Make a UI Design' />
          </div>
        
          <div className='mb-4 space-y-2'>
            <h3>Date:</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='date' />
          </div>
        
          <div className='mb-4 space-y-2'>
            <h3>Assign To:</h3>
            <input 
              value={asignTo}
              onChange={(e) => setaAsignTo(e.target.value)}
              className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Employee name.' />
          </div>
        
          <div className='mb-4 space-y-2'>
            <h3>Category:</h3>
            <input 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='bg-zinc-800 outline-none px-2 py-1 rounded-lg' type='text' placeholder='Design, UI, Code, etc' />
          </div>
        </div>

        <div className='flex flex-col justify-between h-full'>
          <div className='mb-4 space-y-2'>
            <h3>Description:</h3>
            <textarea 
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className='bg-zinc-800 outline-none rounded-lg' name='' id='' cols='30' rows='5'/>
          </div>

          <div className='p-5 flex items-center justify-center'>
            <button className='bg-blue-600 py-1 px-2 rounded-lg mt-5 hover:bg-blue-500'>
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask;
