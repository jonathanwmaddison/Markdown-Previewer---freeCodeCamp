var React = require('react');
var ReactDOM = require('react-dom');
var Display = require('Display');
var Input = require('Input');

ReactDOM.render(
	<div>
		<h1>React Markdown Previewer </h1>
		<Display/>
	</div>,
	document.getElementById('app')
);