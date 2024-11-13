import React from "react";

const ToDoListItem = React.memo(({ index, todoName, onEdit, onDelete }) => {
    return (
        <div className="todoListItems">
            <div className="itemName">
                <p>{todoName}</p>
            </div>
            <div className="listActionBtns">
                <button className="btn btn-warning" onClick={() => onEdit(index)}>edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(index)}>delete</button>
            </div>
        </div>
    );
});

export default ToDoListItem;