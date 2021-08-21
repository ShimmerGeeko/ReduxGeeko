import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hooks from './Hooks';
import InternetSpeed from './InternetSpeed';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import App from './App';
export class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Welcome to my Page :)
                    </Toolbar>
                </AppBar>
                <div style={{padding: "15px"}}>
                <App />
                </div>
                <div style={{padding: "15px"}}>
                <Hooks />
                </div>
                <div style={{padding: "15px"}}>
                <InternetSpeed />
                </div>
                <AddTodoForm />
                <TodoList />
			<TotalCompleteItems />
               
               
              
            </div>
        )
    }
}
export default Navbar