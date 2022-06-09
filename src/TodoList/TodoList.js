import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css'

export default function TodoList ({todos,onDelete,onChange}) {
    return (
        <div className="ListContainer">
            {
                todos.map((todo,index)=>{
                    return(
                        <TodoItem
                            number={index+1}
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    );
};

