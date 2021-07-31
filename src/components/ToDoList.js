import React, { Component, Fragment } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoContent from './ToDoContent';

class ToDoList extends Component
{
	render()
	{
		return (
			<Fragment>
				<ToDoHeader />
				<ToDoContent />
			</Fragment>
		);
	}
}

export default ToDoList;