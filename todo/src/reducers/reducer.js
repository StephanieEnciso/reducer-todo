export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn redux',
            completed: false,
            id: 389298758
        },
    ],
};

export const ADD_TODO ='ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: 
          return {
              ...state, 
              todos: [
                  ...state.todos, 
                  { item: action.text, id: Date.now(), completed: false }
              ],
            };
        case TOGGLE_COMPLETE:
            return {
                ...state, 
                todos: state.todos.map(todo => 
                    todo.id === action.id ? { ...todo, completed: !todo.completed} : { ...todo, completed: todo.completed}
                ),
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
            };
        default:
            return state;
    }
};

