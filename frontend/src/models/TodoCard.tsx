import React, {useState} from 'react';
import {Todo} from "./Todo";
import '../styles/TodoCard.css';
import axios from "axios";
import TodoInput from "./TodoInput";


type CardProps = {
    currentTodo:Todo,
    getAllTodosFromBackend: () => void // receive function form TodoGallery
}

function TodoCard(props:CardProps) {
    const [description,setDescription] = useState(props.currentTodo.description)


    function deleteById(){
        const urlDelete = "/api/todo/" + props.currentTodo.id;
        axios.delete(urlDelete)
            .then(props.getAllTodosFromBackend)
    }

    function updateById(){
        const urlUpdate = "/api/todo/" + props.currentTodo.id;
        axios.put(urlUpdate,{
            description: description,
            status: props.currentTodo.status,
            id: props.currentTodo.id
        })
            .then(props.getAllTodosFromBackend)
    }

    function advanceStatus() {
        if (props.currentTodo.status === "OPEN"){
            props.currentTodo.status = "IN_PROGRESS";
        } else {
            props.currentTodo.status = "DONE";
        }
        updateById();
    }

    return (
        <div id="frame" key={props.currentTodo.id}>
            <h2 >{props.currentTodo.description}</h2>
            <div>
                <select></select>
                <p>Change description:</p>
                <TodoInput setInputName={setDescription}></TodoInput>
                <button onClick={updateById}>Update</button>
            </div>
            <div>
                {props.currentTodo.status==="DONE"
                ? <button onClick={deleteById}>Delete</button>
                : <></>}
            </div>
            <div>
                {props.currentTodo.status!=="DONE"
                    ? <button onClick={advanceStatus}>Advance</button>
                    : <></>}
            </div>



        </div>
    );
}

export default TodoCard;