import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length>0 ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>
                        {todo.content}
                        <span className="badge red" onClick={() => {deleteTodo(todo.id)}}>
                            Delete
                        </span>
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center"> No todo's left </p>
    );
    return (
       <div className="todos collection">
           {todoList}
       </div>
    )
};
export default Todos;