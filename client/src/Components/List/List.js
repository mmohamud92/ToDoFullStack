import React, { useState, useEffect } from "react";
import "./List.css";
import Item from "../Item/Item";

function List({ task, arrayToMap, text, index, deleteItem }) {
      return (
            <div className="boxes boxTwo">
                  <div className="secondBox">
                        <Item arrayToMap={arrayToMap} />
                        <footer className="taskRemaining">
                              <h3 className="taskNumber">
                                    You have {index} task(s) remaining
                              </h3>
                              <button
                                    type="button"
                                    className="button deleteButton"
                                    onClick={deleteItem}
                              >
                                    DELETE
                              </button>
                        </footer>
                  </div>
            </div>
      );
}
export default List;
