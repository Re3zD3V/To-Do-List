import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoContent extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			tasks : []
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			tasks : nextProps.tasks
		}
	}

	render() {
		return (
			<ul className="list-group m-3">
				{
					this.state.tasks.length > 0 ?
						this.state.tasks.map(
							(task, index) => {
								return (
									<ToDoItem
										key = { task.id }
										task = { task }
										onToggleCompleted = { this.props.onToggleCompleted }
									/>
								);
							}
						)
					:
						<li className="list-group-item d-flex align-items-center">
							Aucune tâche à afficher
						</li>
				}
			</ul>
		);
	}
}

export default ToDoContent;