import { useContext } from 'react';
import AllTasks from '../comps/AllTasks';
import CreateTask from '../comps/CreateTask';
import Header from '../comps/Header';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({ handleLogout }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Calculate the total number of new tasks
  const totalNewTasks = userData.employees.reduce((total, employee) => {
    const newTaskCount = employee.tasks.filter(task => task.newTask).length;
    return total + newTaskCount;
  }, 0);

  return (
    <div className="p-10 md:p-0 bg-zinc-950 md:bg-black h-fit flex-none md:flex md:justify-center md:items-center">
      <div className="h-fit md:my-5 md:w-[75%] md:bg-zinc-950 md:px-5 md:py-2 md:rounded-xl md:border-2 md:border-blue-600 md:h-fit">
        <Header handleLogout={handleLogout} />
        <CreateTask />
        <div className='flex justify-between items-baseline mx-2'>
         <h1>{totalNewTasks} New Task{totalNewTasks !== 1 ? 's' : ''}</h1>
         <div className='flex gap-2 text-[10px] md:text-xs'>
          <div className='flex items-center gap-1'>
           <p>Completed:</p>
           <div className='w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-600'></div>  
          </div>
          <div className='flex items-center gap-1'>
           <p>On Working:</p>
           <div className='w-3 md:w-4 h-3 md:h-4 rounded-full bg-yellow-600'></div>  
          </div>
          <div className='flex items-center gap-1'>
           <p>Failed:</p>
           <div className='w-3 md:w-4 h-3 md:h-4 rounded-full bg-red-600'></div>  
          </div>
         </div>
        </div>
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
