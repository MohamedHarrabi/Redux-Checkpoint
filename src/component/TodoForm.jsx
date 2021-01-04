import React, { useState, useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../Redux/actionTypes';

function TodoForm() {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const [input, setInput] = useState("");
 

  const handleChange = e => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch()
  const add=()=>{
    dispatch(addTodo({id:Math.random(),isComplete:false,text:input}));
    setInput("");
  }

  

  return (
    <div  className='todo-form'>
      {/* {edi.isEdit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={editt} className='todo-button edit'>
            Update
          </button>
        </>
      ) : ( */}
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            type='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={add} className='todo-button'>
            Add todo
          </button>
         

        </>
       {/* )}  */}
    </div>
  );
}

export default TodoForm;
