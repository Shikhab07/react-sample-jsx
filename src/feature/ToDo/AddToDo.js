import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../actions';
const AddToDoComponent = ({active, onClick})=>{
    let input;
   // console.log(active);
  return (
    <div>
        <form onSubmit={e=>{
            e.preventDefault();
             if(!input.value.trim()){
                 return
             }
          //   dispatch(addTodo(input.value))
             onClick(input.value)
             input.value =''
        }}>
        <input
          ref={(node) => (input=node) }
        />
        <button type="submit">Add To Do</button>
        </form>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        active: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: val=> {
            dispatch(addTodo(val));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoComponent);