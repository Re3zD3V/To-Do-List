import React from 'react';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash, FaSquare} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ToDoNav = ( props ) => (
	<footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
		<div className="btn-group">
			<NavLink exact to="/home" className="btn btn-outline-dark">
				<FaListAlt />
			</NavLink>

			<NavLink exact to="/home/completed" className="btn btn-outline-dark">
				<FaCheckSquare />
			</NavLink>

			<NavLink exact to="/home/uncompleted" className="btn btn-outline-dark">
				<FaSquare />
			</NavLink>

			<NavLink exact to="/add-task" className="btn btn-outline-dark">
				<FaPlusSquare />
			</NavLink>
		</div>
		<button onClick={ props.onDeleteCompleted } className="btn btn-outline-dark"><FaTrash /></button>
	</footer>
);

export default ToDoNav;