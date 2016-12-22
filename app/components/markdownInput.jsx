var React = require('react');
var marked = require('marked');

var Input = React.createClass({
	onFormSubmit: function (e){
		var input = this.refs.input.value;
		input = marked(input);
		var updates={};
		updates.input = input;
		this.props.onUpdates(updates);
	},
	render: function () {
		return (
		<div>
			<form >
				<textarea rows="30" cols="100" onKeyPress={this.onFormSubmit} ref="input" placeholder="Add your markdown text here"></textarea>
			</form>
		</div>
		);
	}
});

module.exports = Input;