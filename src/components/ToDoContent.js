import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoContent extends Component
{
	render()
	{
		return (
			<ul className="list-group m-3">
				<ToDoItem taskName="Ranger la vaisselle" />
				<ToDoItem taskName="Répondre appel d'offres" />
				<ToDoItem taskName="Signer contrat" />
				<ToDoItem taskName="Ranger la salon" />
			</ul>
		);
	}
}

export default ToDoContent;