import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoNav from './ToDoNav';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AddTask from './AddTask';
import initialData from './../initialData';
import uniqid from 'uniqid';

class App extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			tasks : initialData
		}
	}

	onToggleCompleted = taskId => {
		let taskToUpdate = this.state.tasks.find( (task) => task.id === taskId );
		taskToUpdate.completed = !taskToUpdate.completed;

		this.setState( prevState => (
			{
				tasks : prevState.tasks.map( task => {
					return ( task.id === taskId ) ? taskToUpdate : task;
				} )
			}
		))
	}

	onDeleteCompleted = () => {
		this.setState(prevState => (
			{
				tasks : prevState.tasks.filter( task => !task.completed )
			}
		));
	}

	onAddTask = taskName => {
		let newTask = {
			id : uniqid(),
			name : taskName,
			completed : false
		};

		this.setState( prevState => (
			{
				tasks : [ ...prevState.tasks, newTask ]
			}
		))
	}

	render() {
		return (
			<section id="todo">
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route exact path="/add-task" render={ (props) => <AddTask { ...props } onAddTask={ this.onAddTask } /> } />
						<Route exact path="/home/:filter?" render={ ( props ) => <ToDoList { ...props } tasks={ this.state.tasks } onToggleCompleted={ this.onToggleCompleted } /> } />
					</Switch>
					<ToDoNav onDeleteCompleted={ this.onDeleteCompleted } />
				</BrowserRouter>
			</section>
		);
	}
}

export default App;