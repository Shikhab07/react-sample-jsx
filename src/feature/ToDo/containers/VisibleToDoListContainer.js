import {
    connect
} from 'react-redux';
import ToDoListComponent from '../ToDoList';

import {toggleTodo} from '../../../actions';

const VisibleToDos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(x => x.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(x => !x.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: VisibleToDos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => {
            dispatch(toggleTodo(id)); // dispatch action
        }
    }
}

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent);
export default VisibleToDoList;