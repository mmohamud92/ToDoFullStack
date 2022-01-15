import React, { useState, useEffect } from "react";
function Item({ arrayToMap }) {
      const [ticked, setTick] = useState("false");

      function checkTicked(event) {
            setTick(event.target.checked);
            console.log(ticked);
      }

      return (
            <section className="tasks">
                  {arrayToMap.map((toDo, index) => (
                        <div className="taskContainer" key={index}>
                              <label className="checkContainer">
                                    <input
                                          type="checkbox"
                                          className="checkButton"
                                          onChange={checkTicked}
                                    />
                                    <span className="checkmark"></span>
                              </label>
                              <div className="taskToDo">
                                    <h3
                                          style={
                                                ticked === true
                                                      ? {
                                                              textDecoration:
                                                                    "line-through",
                                                        }
                                                      : {
                                                              textDecoration:
                                                                    "none",
                                                        }
                                          }
                                    >
                                          {toDo.task}
                                    </h3>
                                    <div className="taskText"></div>
                              </div>
                        </div>
                  ))}
            </section>
      );
}

export default Item;
