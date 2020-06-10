import React, { useReducer } from 'react';

// useReducer有三个参数, 第一个参数是一个reducer函数, 第二个是初始值,第三个是把第二个函数
// 当做参数的一个函数

// 定义一个reducer



function Todo({ todo, change }) {
    return (
        console.log("render"),
        <li onClick={change}>{todo}</li>
    );
}
export default function UseReducer() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.todo];
            case "CHANGE_TODO":
                return state.map((todo,index) =>{
                    if(todo.id === action.id){
                        todo.value="change";
                    }
                    return todo;
                } )
            default:
                return state;

        }
    }

    const init = (initState) => {
        return [
            ...initState
        ]
    }

    const [state, dispatch] = useReducer(reducer, [{
        id: Date.now(),
        value: "Hello react"
    }], init)

    const change = (id) => {
        dispatch({
            type: "CHANGE_TODO",
            id,
        })
    }
    console.log(state)

    return (
        <div>
            <button onClick={() => { dispatch({ type: "ADD_TODO", todo: { id: Date.now(), value: "Hello Hook" } }) }}> Add </button>
            {state.map((todo, index) => (
                <Todo key={index} todo={todo.value} change={() => { change(todo.id) }} />
            ))}
        </div>
    )
}