import Header from "../comps/Header"
import TaskCounter from "../comps/TaskCounter"
import TasksList from "../Tasks/TasksList"

const EmployeeDashboard = ({data,  handleLogout}) => {
  console.log(data);
  
  return (
    <div className="p-10 md:p-0 bg-zinc-950 md:bg-black h-screen flex-none md:flex md:justify-center md:items-center ">
      <div className="md:w-[75%] md:bg-zinc-950 md:px-5 md:py-2 md:rounded-xl md:border-2 md:border-blue-600 md:h-fit">
        <Header  
         data={data} 
         handleLogout={handleLogout}/>
        <TaskCounter data={data}/>
        <TasksList data={data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard