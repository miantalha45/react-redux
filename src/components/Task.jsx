import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { useRef } from "react";

const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const addNewTask = () => {
        const val = inputRef.current.value.trim();
        if (val != "") {
            dispatch(addTodo(val));
        }
    }

    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add task here..."
                    ref={inputRef}
                    className="taskInput"
                />
                <button onClick={addNewTask}>Add task</button>
            </div>
        </div>
    );
}

export default Task;