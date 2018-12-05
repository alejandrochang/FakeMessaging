// Import the React and ReactDOMs libraries
// Create a React Component
// Take the React Component and show it on the screen

import React from "react";
import ReactDOM from "react-dom";

// function based component

const App = () => {
    const buttonText = { text: 'Click on Me!' };
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className="label" htmlFor="name">Enter name: </label>
            <input id="name" type="text"/>
            <button style={style}> { buttonText.text } </button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));