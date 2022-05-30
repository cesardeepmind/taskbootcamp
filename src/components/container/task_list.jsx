import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';


import '../../styles/task.scss'



const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Default description2', true, LEVELS.URGENTE);
  const defaultTask3 = new Task('Example3', 'Default description3', false, LEVELS.BLOCKING);



  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del compone
  useEffect(() => {
    console.log('Modificacion de tareas');
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    
    return () => {
      console.log('Listado de tareas component');

    }
  }, [tasks])


  function completedTask(task) {
    console.log('Complete this task', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    //we update the state of the component the new list of task and it will update the iteration of the task
    // in order to show the task update
    setTasks(tempTask)
  }

  function deleteTask(task) {
    console.log('Delete this task', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log('Delete this task', task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => {
              return (
                <TaskComponent
                  key={index}
                  task={task}
                  complete={completedTask}
                  remove={deleteTask}
                />
              )
            })
          }

        </tbody>
      </table>
    )
  }

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    )
  }

  const loadingStyle = {
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card header */}
          <div className='card-header p-3'>
            <h5>Your Task:</h5>
          </div>
          {/* Card body */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
              {/* TODO: Add loading spinner */}
              {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
          </div>
        </div>
        <TaskForm add={addTask}length={tasks.length} />
      </div>
      {/* Aplicar un map para renderizar la lista de tareas */}

    </div>
  )
}



export default TaskListComponent