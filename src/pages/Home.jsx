import React, { useState } from 'react'
import { useTheme } from '../ThemeContext';

function Home(){

    const { theme } = useTheme();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTask] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function completeTask(index){
        setCompletedTask([...completedTasks, tasks[index]]);
        deleteTask(index);
    }

    function unCompleteTask(index){

        setTasks(t => [...t, completedTasks[index]]);

        const updatedTasks = completedTasks.filter((_,i) => i !== index);
        setCompletedTask(updatedTasks);
    }

    return(
    <div className='to-do-list .text-center'>

        <h1 className='mb-4'>To Do List</h1>

        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} id="add-new-task" />
            <button className='add-button' onClick={addTask}>Add</button>
        </div>

        <div className='container-fluid mt-2 w-50'>
            <ol className='list-group list-group-flush' data-bs-theme={theme}>
                {tasks.map((task, index) => 
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center bg-transparent'>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="checkbox" onChange={() => completeTask(index)} id="complete-task"/>
                            <span className='text form-check-label' for="complete-task">{task}</span>
                        </div>
                        <div className="form-check form-check-inline">
                            <button className='delete-button btn-dark me-1' onClick={() => deleteTask(index)}>Delete</button>
                            <button className='move-button btn-dark me-1' onClick={() => moveTaskUp(index)}>&uarr;</button>
                            <button className='move-button btn-dark' onClick={() => moveTaskDown(index)}>&darr;</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>

        <span className='mt-3'>Completed tasks</span>

        <div className='container-fluid mt-2 w-50'>
            <ol className='list-group list-group-flush' data-bs-theme={theme}>
                {completedTasks.map((task, index) => 
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center bg-transparent'>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" onChange={() => unCompleteTask(index)} checked/>
                            <del className='form-check-label' for="complete-task">{task}</del>
                        </div>
                        <button className='delete-button btn-dark' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>

    </div>)
}
export default Home