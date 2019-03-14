import {
    ADD_TODO,
    TOGGLE_TODO
} from '../actions';

// const initialState = {
//     visibilityFilter : VisibilityFilters.SHOW_ALL,
//     toDos: []
// };

// reducer is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState
// Given the same arguments, it should calculate the next state and return it. 
// No surprises. No side effects. No API calls. No mutations. Just a calculation

const todos = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            // used interceptor
            // case 'GET_NEWS':
            //     return {
            //         ...state,
            //         loading: true
            //     }

        case 'NEWS_RECEIVED':
            return {
                ...state,
                news: action.json // taking only first record
                // loading: false
            }
        case "NEWS_RECIEVED_ERROR":
            return {
                ...state,
                error: action.error
                // loading: false
            }
        case 'SET_LOADER':
            return {
                ...state,
                loading: action.loading
            }

        case 'NEWS_RECIEVED_TEST':
            console.log('finally cancelled');
            break;
        case 'GET_NEWS':
        default:
            return state;
    }
}

export default todos;