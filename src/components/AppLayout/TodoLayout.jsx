import { useCallback, useState } from 'react';
import TodoListLayout from '../ListLayout/TodoListLayout';
import './TodoLayout.css';
import todoLogo from './todoBgImg.png';

const TodoLayout = () => {
    const [listValue, setListValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodoList = useCallback((event) => {
        event.preventDefault();

        if (!listValue) return;

        setTodoList((prevTodoList) => [...prevTodoList, listValue.trim()]);
        setListValue('');
    }, [listValue]);

    const editTodoList = useCallback((index) => {
        const editToDo = prompt("Edit this task:", todoList[index]);

        if (!editToDo) return;
        setTodoList((prevTodoList) =>
            prevTodoList.map((item, ind) => ind === index ? editToDo : item)
        );
    }, [todoList]);

    const deleteTodoList = useCallback((index) => {
        setTodoList((prevTodoList) =>
            prevTodoList.filter((_, ind) => ind !== index)
        );
    }, []);

    return (
        <div className="todo-wrapper">
            <div className="todo-innerContainer">
                <div className="todoHeader">
                    <img src={todoLogo} alt="todo list"/>
                    <h1>ToDo List App</h1>
                </div>
                <form onSubmit={addTodoList}>
                    <div className="row">
                        <div className="todoForm_wrapper col-sm-12">
                            <div className="form-group">
                                <input
                                    value={listValue}
                                    onChange={({target}) => setListValue(target.value)}
                                    type='text'
                                    required
                                    placeholder='add items...'
                                    className='form-control todoInput'/>
                                <button type="submit" className='btn btn-primary'>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
                <TodoListLayout listNames={todoList} onEdit={editTodoList} onDelete={deleteTodoList}/>
            </div>
        </div>
    );
};

export default TodoLayout;