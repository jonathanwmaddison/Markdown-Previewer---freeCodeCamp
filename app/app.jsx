var React = require('react');
var ReactDOM = require('react-dom')

var objOne = {
	name: 'Jonathan',
	location: 'Redwood City'
};

var ObjTwo = {
	age: 31,
	...objOne
};
console.log(ObjTwo);

ReactDOM.render(
	<h1> Boilerplate app!</h1>,
	document.getElementById('app')
);