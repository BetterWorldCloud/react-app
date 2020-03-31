import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
// const App = function() {
//     return <div> Hi there</div>;
// };

// ES2015 format
function getButtonText() {
	return "Click On Me..!";
}

const App = () => {
	// const buttonText = 'Click Me!';
	const nameText = "Please enter your name:";
    return (
	<div>
		<div>Hi there!</div>
		<label className="label" htmlFor="name">
			{nameText}
		</label>

		<input id="name" type="text"/>

		<button style={{backgroundColor: 'blue', color: 'white'}}> 
		{getButtonText()}
		</button>
		</div>
	);

};

// Take the react component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
