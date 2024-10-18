import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TasksList = ({ data }) => {
  return (
    <div id='taskList' className='overflow-x-auto flex flex-nowrap items-center justify-start h-fit w-full py-5  gap-5 mt-5'>
     {data.tasks.map((e, idx) => {
         if (e.active) {
            return <AcceptTask data={e} key={idx}/>
         }
         if (e.newTask) {
           return <NewTask data={e} key={idx}/>
         }
         if (e.completed) {
           return <CompleteTask data={e} key={idx}/>
         }
         if (e.failed) {
           return <FailedTask data={e} key={idx}/>
         }
     })}
  </div>
  )
}

export default TasksList