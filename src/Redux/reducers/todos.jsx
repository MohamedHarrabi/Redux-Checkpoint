import { ADD_TODO,  DELETE, COMPLETE, EDIT} from "../action";

const initialState = {
 
  tasks: [{id:1,isComplete:false,text:"todo 1",isEdit:false},
          {id:2,isComplete:false,text:"todo 2",isEdit:false},
          {id:3,isComplete:true,text:"todo 3",isEdit:false},
          {id:4,isComplete:false,text:"todo 4",isEdit:false}]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks:[...state.tasks,action.payload] };



    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload)
      };

    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
        )
      };

     

    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.editedText}
            : el
        ),
       
      };

    
      // case DONE:
      // return {
      //   ...state,
      //   tasks: state.tasks.filter((el, i) => el.isComplete !== action.payload)
      // };
      // case NOT:
      //   return {
      //     ...state
      //   };

    default:
      return state;
  }
};

export default todos;