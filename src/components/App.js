import React, { Component, Fragment } from 'react';
import ToDoList from './ToDoList';
import ToDoNav from './ToDoNav';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AddTask from './AddTask';

class App extends Component
{
	render()
	{
		return (
			<section id="todo">
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route exact path="/add-task" component={AddTask} />
						<Route path="/home/:filter?" component={ToDoList} />
					</Switch>
					<ToDoNav />
				</BrowserRouter>
			</section>
		);
	}
}

export default App;