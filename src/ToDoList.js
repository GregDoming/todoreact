import React from 'react';

const ToDoList = props => {
    return (
        <div>
            {props.list.map((todo, id)=> {
                return <div key={`todo${id}`}>
                {todo}
                <button onClick={() => props.deleteTodo(id)}>del</button>
                </div>
            })}
        </div>
    );
};


export default ToDoList