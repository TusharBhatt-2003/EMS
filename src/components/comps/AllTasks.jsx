import { useContext } from "react"
import { AuthContext } from '../../context/AuthProvider'
const AllTasks = () => {

  const authData = useContext(AuthContext)
  console.log(authData.employees)
  return (

    <div id="allTasks" className="p-5 my-5 space-y-5 h-60 overflow-auto bg-zinc-900 rounded-xl">
      {authData.employees.map((e, id) => {
        return <div key={id} className="bg-black flex justify-between items-center py-2 px-4 rounded-xl">
        <div className="flex font-semibold items-baseline justify-center gap-5 text-xl">
           {e.name}
           <div className="text-sm">
            EID: {e.id}
           </div>
        </div>
        <div className="flex gap-2"> 
         <p className="text-yellow-600">{e.taskCounts.active}</p>
         <p className="text-green-600">{e.taskCounts.completed}</p>
         <p className="text-red-600">{e.taskCounts.failed}</p>
        </div>
      </div>
      })}
      
    </div>
  )
}

export default AllTasks