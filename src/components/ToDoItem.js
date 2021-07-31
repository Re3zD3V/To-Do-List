import React, { Component } from 'react';

class ToDoItem extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
	}

	render()
	{
		return (
			<li className="list-group-item d-flex align-items-center">
				{this.props.taskName} 
				<button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
			</li>
		);
	};
}

export default ToDoItem;