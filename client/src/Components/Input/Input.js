import React from "react";
import { useState } from "react";
import "./Input.css";

function Input({ addToList }) {
      function getTask(text) {
            setTask(text);
            console.log(task);
      }
      const [task, setTask] = useState("");
      async function onSubmitForm(event) {
            event.preventDefault();
            try {
                  const body = { task };
                  const response = await fetch("http://localhost:5000/todo", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body),
                  });
                  console.log(response);
                  console.log(body);
            } catch (error) {
                  console.error(error.message);
            }
      }

      return (
            <header>
                  <h1>TO DO LIST</h1>
                  <div className="boxes boxeOne">
                        <div className="firstBox">
                              <form
                                    className="taskContent"
                                    onSubmit={onSubmitForm}
                              >
                                    <input
                                          type="text"
                                          className="taskInput"
                                          placeholder="Add to your task list!"
                                          onChange={(event) =>
                                                getTask(event.target.value)
                                          }
                                    />
                              </form>
                              <button
                                    type="button"
                                    className="button addButton"
                                    onClick={() => addToList()}
                              >
                                    ADD
                              </button>
                        </div>
                  </div>
            </header>
      );
}

export default Input;
