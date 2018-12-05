// Import the React and ReactDOMs libraries
// Create a React Component
// Take the React Component and show it on the screen

import React from 'react';
import ReactDOM from 'react-dom';

// function based component
const App = () => {
    return <div>Hi There</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));