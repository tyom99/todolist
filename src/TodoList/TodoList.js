import React from 'react';
import TodoItem from "./TodoItem/TodoItem";

export default function TodoList ({todos,onDelete,onChange}) {
    return (
        <div>
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

