import React from 'react';
import VisibleToDoList from './containers/VisibleToDoListContainer';
import FooterComponent from './Footer'
import AddToDo from './AddToDo';
const ToDoListDemoComponent = () => {
     return (
         <div>
           <AddToDo></AddToDo>
           <VisibleToDoList></VisibleToDoList>
           <FooterComponent></FooterComponent>
         </div>
     );
};

export default ToDoListDemoComponent;   

