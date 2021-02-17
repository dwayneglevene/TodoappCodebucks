import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
        // 547
    }

    const AddTask = () => {

        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false,
            }

            setTaskList([...tasklist, taskDetails]);
        }
    }


    const deletetask = (e,id) =>{
        e.preventDefault();
        setTaskList(tasklist.filter(t => t.id != id))
    }
    return (<div className="todo">Todo App


        <input type="text" name="text" onChange={e => handleChange(e)} id="text" placeholder="Add Task" />
        <button className="add-btn" onClick={AddTask}>Add</button>
        
        {tasklist !==[] ?  (
        <ul>
        {tasklist.map((t) =>(
           
            <li className="listitem">{t.value}
         
            <button className="completed">Completed</button>

            <button className="delete" onClick={e => deletetask(e,t.id)}>Delete</button>
   </li>
        ))}
        </ul>
        ): null}
    
    </div >);
}

export default TodoApp;