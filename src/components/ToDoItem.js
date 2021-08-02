import React, { Component } from 'react';

class ToDoItem extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			...props.task
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			...nextProps.task
		}
	}

	toggleCompleted = () => {
		this.props.onToggleCompleted(this.state.id);
	}

	render() {
		return (
			<li className="list-group-item d-flex align-items-center">
				{ this.state.name }
				<button onClick={ this.toggleCompleted } className={ "btn btn-sm ms-auto border border-3" + (( this.state.completed ) ? ( " border-success btn-outline-success" ) : ( " border-secondary btn-outline-secondary" )) } >&#x2713;</button>
			</li>
		);
	};
}

export default ToDoItem;