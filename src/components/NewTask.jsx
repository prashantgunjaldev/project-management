import { useState } from "react"

export default function NewTask({onNewTask}){
    const [task, setTask] = useState('');

    function saveTask(){
        if(task.trim() !== ''){
            onNewTask(task);
            setTask('');
        }
    };

    return <div className="flex items-center gap-4">
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button className="text-stone-700 hover:text-stone-950" onClick={saveTask}>Add Task</button>
    </div>;
}