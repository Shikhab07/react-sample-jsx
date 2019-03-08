import React from 'react';
import PropTypes from 'prop-types';
import Todo from './ToDo';

const ToDoListComponent= ({todos, toggleTodo }) => (
    <ul>
      { 
        todos.map(t=>(
            <Todo key={t.id} onClick={()=> toggleTodo(t.id)} {...t}></Todo>
        )) 
      }
    </ul>
);

ToDoListComponent.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}
export default ToDoListComponent;