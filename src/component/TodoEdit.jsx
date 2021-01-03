import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import  {Edit}  from "../Redux/actionTypes";
import { TiEdit } from 'react-icons/ti';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background:"black"
  },
};

Modal.setAppElement("#root");

const TodoEdit = ({todo}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const editt = () => {
    dispatch(Edit({ id: todo.id, editedText: editText }));
    closeModal();
  };
  return (

    <div>
      
      <TiEdit
        onClick={openModal}
        className='edit-icon'
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
        className="todo-input edit"
          id="ModalInput"
          type="text"
          placeholder="Edit to do..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button className="Modal-Btn todo-button edit" onClick={editt}>
          Save
        </button>
        <button className="Modal-Btn todo-button edit" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default TodoEdit;