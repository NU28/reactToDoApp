import React from "react";
import ToDoListItem from './ToDoListItem';
import './ToDoListLayout.css';

const TodoListLayout = React.memo(({ listNames, onEdit, onDelete}) => {
    return (
        <div className={`todoListWrapper${listNames.length > 0 ? ' hasItems' : ''}`}>
            {listNames.map((listName, index) => {
                return(
                    <ToDoListItem
                        key={index}
                        index={index}
                        todoName={listName}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    );
});

export default TodoListLayout;