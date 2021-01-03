import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';

import { MdDone } from 'react-icons/md';
import {useSelector,useDispatch} from 'react-redux';
import { Delete , Complete} from '../Redux/actionTypes';
import TodoEdit from './TodoEdit';


const Todo = () => {
 
  
 const list = useSelector(state => state.tasks)
 const dispatch = useDispatch()
const del=(a)=>dispatch(Delete(a.id))



  return list.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div  key={todo.id} >
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={()=>del(todo)}
          className='delete-icon'
        />
        
        <TodoEdit todo={todo}/>
        <MdDone onClick={()=>dispatch(Complete(todo.id))} />
      </div>
    </div>
  )
  );
};

export default Todo;