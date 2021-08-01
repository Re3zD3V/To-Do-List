import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoNav from './ToDoNav';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AddTask from './AddTask';
import initialData from './../initialData';

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
						<Route exact path="/home/:filter?" render={(props) => <ToDoList {...props} tasks={initialData} />} />
					</Switch>
					<ToDoNav />
				</BrowserRouter>
			</section>
		);
	}
}

export default App;