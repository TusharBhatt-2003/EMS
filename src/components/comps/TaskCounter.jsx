
const TaskCounter = ({data}) => {
  return (
    <div className="grid grid-cols-2 w-fit md:w-auto md:flex items-center mt-10 gap-5  justify-between">
        <div className="rounded-2xl w-[40vw] h-[15vh] md:h-auto py-6 px-8 bg-teal-600">
            <h2 className="text-3xl font-semibold">
            {data.taskCounts.newTask}</h2>
            <h3 className="text-sm font-bold">
            New Task</h3>
        </div>
        <div className="rounded-2xl w-[40vw] h-[15vh] md:h-auto py-6 px-8 bg-green-600">
            <h2 className="text-3xl font-semibold">
            {data.taskCounts.completed}</h2>
            <h3 className="text-sm font-bold">
            Completed Task</h3>
        </div>
        <div className="rounded-2xl w-[40vw] h-[15vh] md:h-auto py-6 px-8 bg-yellow-400">
            <h2 className="text-3xl font-semibold">
            {data.taskCounts.active}</h2>
            <h3 className="text-sm font-bold">
            Accepted Task</h3>
        </div>
        <div className="rounded-2xl w-[40vw] h-[15vh] md:h-auto py-6 px-8 bg-red-800">
            <h2 className="text-3xl font-semibold">
            {data.taskCounts.failed}</h2>
            <h3 className="text-sm font-bold">
            Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskCounter