import {ADD_TODO,DELETE,COMPLETE,EDIT,DONE} from './action';


export const addTodo = (payload) => {
return {type: ADD_TODO, payload} 
 };


export const Delete =(payload) => {
    return {type:DELETE, payload}
};

// export const Not =(payload) => {
//     return {type:NOT, payload}
// };

export const Complete =(payload) => {
    return {type:COMPLETE, payload}
};

export const Edit =(payload) => {
    return {type:EDIT, payload}
};
export const Done =(payload) => {
    return {type:DONE, payload}
};
