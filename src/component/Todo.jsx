import React, { useState } from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';

import { MdDone } from 'react-icons/md';
import {useSelector,useDispatch} from 'react-redux';
import { Delete , Complete} from '../Redux/actionTypes';
import TodoEdit from './TodoEdit';


const Todo = () => {
 
  
 const list = useSelector(state => state.tasks)
 const dispatch = useDispatch()
const del=(a)=>dispatch(Delete(a.id))

const [tog, setTog] = useState(null)

const toggelF =()=>{
  setTog(false);
}
const toggelT = ()=>{
  setTog(null);
}
const toggelTT =()=>{
  setTog(true);
}


  return (<div>
    
        <button className="todo-button" onClick={toggelT}>ALL</button>
        <button className="todo-button" onClick={toggelF}>DONE</button>
        <button className="todo-button" onClick={toggelTT}>NOT</button>
    
   { list.filter(el=>el.id !== 0 && el.isComplete !== tog).map((todo, index) => (
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
  )}
  </div>);
};

export default Todo;