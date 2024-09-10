import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from "../features/todo/todoSlice"

const Todos = () => {

    const [editTodoId, setEditTodoId] = useState(null);
    const [input, setInput] = useState("");
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const updateHandler = (todo)=>{
        if(editTodoId === todo.id){
            dispatch(updateTodo({id: todo.id, text: input}));
            setEditTodoId(null)
        }else{
            //start edit mode
            setEditTodoId(todo.id);
            setInput(todo.text);
        }
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <input 
                            type="text" 
                            className={`text-white bg-inherit w-[90%] outline-none ${editTodoId === todo.id ? 'cursor-text' : 'cursor-pointer'}`}
                            value={editTodoId === todo.id ? input : todo.text}
                            readOnly={editTodoId !== todo.id}
                            onChange={(e)=>setInput(e.target.value)}
                        />
                        <button
                            onClick={() => updateHandler(todo)}
                            className="text-white bg-red-500 border-0 py-1 mr-4 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos