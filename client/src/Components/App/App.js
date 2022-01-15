import "./App.css";
import React, { useState, useEffect } from "react";

import Input from "../Input/Input";
import List from "../List/List";

function App() {
      const [inputValue, setInputValue] = useState("");
      const [toDos, setToDos] = useState([]);

      useEffect(() => {
            async function getToDos() {
                  try {
                        const response = await fetch(
                              "http://localhost:5000/todo"
                        );
                        const data = await response.json();
                        setToDos(data);
                        console.log(data);
                  } catch (error) {
                        console.error(error.message);
                  }
            }
            getToDos();
      }, []);

      console.log(toDos.payload);
      console.log(toDos);
      const arrayToMap = toDos.payload;

      function getValue(text) {
            setInputValue(text);
            console.log(inputValue);
      }

      return (
            <div className="App">
                  <Input getValue={getValue} />
                  <List arrayToMap={arrayToMap} />
            </div>
      );
}

export default App;
