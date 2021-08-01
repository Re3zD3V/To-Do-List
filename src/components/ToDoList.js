import React, { Component, Fragment } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoContent from './ToDoContent';

class ToDoList extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			tasks : [],
			filter : undefined
		};
	}

	static getDerivedStateFromProps(nextProps, prevState)
	{
		if ( (nextProps.match.params.filter === undefined && prevState.filter !== 'none') || (nextProps.match.params.filter !== undefined && prevState.filter !== nextProps.match.params.filter) ) {
			
			let filter = (nextProps.match.params.filter !== undefined) ? nextProps.match.params.filter : 'none';
			let filteredTasks = ToDoList.getFilteredTasks(nextProps.match.params.filter, nextProps.tasks);
			
			return {
				tasks : filteredTasks,
				filter : filter,
				updated : true
			}
		}
		return null;
	}

	static getFilteredTasks(filter, tasks)
	{
		{
			let filteredTasks;
			switch(filter){
				case 'completed':
					filteredTasks = tasks.filter((value) => value.completed === true);
					break;
				case 'uncompleted':
					filteredTasks = tasks.filter((value) => value.completed === false);
					break;
				default:
					filteredTasks = tasks;
			}

			return filteredTasks;
		}
	}

	render()
	{
		console.log('ToDoList render');
		return (
			<Fragment>
				<ToDoHeader />
				<ToDoContent tasks={ this.state.tasks } />
			</Fragment>
		);
	}
}

export default ToDoList;