import {ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED} from '../reducers/reducer';

const addTodoAction = (value) => {
    return({type:ADD_TODO, text:value})
}

const toggleCompleteAction = (value) => {
    return({type:TOGGLE_COMPLETE, id:value})
}

const clearCompletedAction = () => {
    return({type:CLEAR_COMPLETED})
}

export default {
    addTodoAction: addTodoAction,
    toggleCompleteAction: toggleCompleteAction,
    clearCompletedAction: clearCompletedAction,
}