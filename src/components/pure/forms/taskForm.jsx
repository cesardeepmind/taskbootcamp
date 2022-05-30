import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({ add, length }) => {


  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask);
  }


  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  const initialValues = {
    taskname: '',
    description: '',
    level: LEVELS.NORMAL
  }

  const taskSchema = Yup.object().shape(
    {
      taskname: Yup.string().required('Task name Required'),
      description: Yup.string().required('Description Required'),
      level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a Level: Normal/Urgent/Blocking').required('Level Required'),
    }
  )


  return (
    <div>
      <h4>Task Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={addTask}
      >
        <Form>
          <label htmlFor="taskname">Task Name</label>
          <Field
            id="taskname"
            name="taskname"
            placeholder="Task Name"
            type="text"
            ref={nameRef}
          />
          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="Description"
            type="text"
            ref={descriptionRef}
          />

          <Field
            id="level"
            name="level"
            component="select"
            ref={levelRef}
          >
            <option value={LEVELS.NORMAL} style={normalStyle}>Normal</option>
            <option value={LEVELS.URGENT} style={urgentStyle}>Urgent</option>
            <option value={LEVELS.BLOCKING} style={blockingStyle}>Blocking</option>
          </Field>

          <button type='submit'>
            {length > 0 ? 'Add Task' : 'Create your first Task'}
          </button>
        </Form>
      </Formik>
    </div>
    // <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
    //   <div className='form-outline flex-fill'>
    //     <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Tasks Name' required autoFocus />
    //     <input ref={descriptionRef} id='descriptionName' type='text' placeholder='Tasks Description' className='form-control form-control-lg' required />
        
    //     <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
    //       <option style={normalStyle} value={LEVELS.NORMAL}>
    //         Normal
    //       </option>
    //       <option style={urgentStyle} value={LEVELS.URGENTE}>
    //         Urgente
    //       </option>
    //       <option style={blockingStyle} value={LEVELS.BLOCKING}>
    //         Blocking
    //       </option>
    //     </select>
    //     <button type='submit' className='btn btn-success btn-lg ms-3'>
    //       {length > 0 ? 'Add Task' : 'Create your first Task'}
    //     </button>
    //   </div>
    // </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;
