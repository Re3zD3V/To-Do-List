import React from 'react';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ToDoNav = () => (
	<footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
		<div className="btn-group">
			<NavLink to="/home" className="btn btn-outline-dark">
				<FaListAlt />
			</NavLink>

			<NavLink to="/home/completed" className="btn btn-outline-dark">
				<FaCheckSquare />
			</NavLink>

			<NavLink to="/add-task" className="btn btn-outline-dark">
				<FaPlusSquare />
			</NavLink>
		</div>
		<button className="btn btn-outline-dark"><FaTrash /></button>
	</footer>
);

export default ToDoNav;