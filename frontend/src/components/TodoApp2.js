import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function TodoApp2({ todos, addTodo, setTodos, fetchTodos, postTodos, deleteTodos}){
    const [viewCompleted , setViewCompleted] = useState(false)
    const [activeItem, setActiveItem] = useState({
      title: "",
      description: "",
      completed: false,
    })
    const [modal, setModal] = useState(false)
    useEffect(() => {
        fetchTodos();
      },[fetchTodos]);
      const newTodos = todos.filter(
        (item) => item.completed === viewCompleted
      );
    return(
        <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setModal(!modal);
                    setActiveItem({ title: "", description: "", completed: false })}}
                >
                  Add task
                </button>
              </div>
                <div className="nav nav-tabs">
                    <span
                    onClick={() => setViewCompleted(true)}
                    className={viewCompleted ? "nav-link active" : "nav-link"}
                    >
                    Complete
                    </span>
                    <span
                    onClick={() => setViewCompleted(false)}
                    className={viewCompleted ? "nav-link" : "nav-link active"}
                    >
                    Incomplete
                    </span>
                </div>
              <ul className="list-group list-group-flush border-top-0">
              { newTodos && newTodos.map((todo) => (
                <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span
                    className={`todo-title mr-2 ${
                        viewCompleted ? "completed-todo" : ""
                    }`}
                    title={todo.description}
                    >
                    {todo.title}
                    </span>
                    <span>
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={() => {
                          setModal(true)
                          setActiveItem(todo)}}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodos(todo)}>
                        Delete
                    </button>
                    </span>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {modal ? (
          <Modal
            activeItem={activeItem}
            toggle={() => setModal(!modal)}
            onSave={postTodos}
          />
        ) : null}
      </main>
    )
}