import React,{useState} from "react";
import "./todoapp.css";

function TodoApp(){

const [task,setTask] = useState("");
const [tasklist,setTaskList] = useState([]);

const handleChange = (e) => {
    setTask(e.target.value) 
    // 547
}

const AddTask = () =>{
    
    if(task !==""){
        const taskDetails = {
            id:Math.floor(Math.random() * 1000),
            value: task,
            isCompleted:false,
        }

        setTaskList([tasklist,taskDetails]);
    }
}

        console.log("TaskList :" , tasklist)

    return (<div className="todo">Todo App
    

        <input type="text" name="text" onChange={e => handleChange(e)} id="text" placeholder="Add Task"/>
         <button className="add-btn" onClick={AddTask}>Add</button>
    
    </div>);
}

export default TodoApp;