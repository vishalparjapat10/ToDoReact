import React, { Component } from 'react';
import './Todo.css';
import { v4 as uuidv4 } from 'uuid';

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[],
            curTask:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            curTask: e.target.value
        })
    }

    handleAddTask = () =>{
        let tasks = this.state.tasks;
        let uid = uuidv4();
        let newTask = {id: uid,task: this.state.curTask};
        this.setState({
            tasks: [...tasks,newTask],
            curTask: ""
        })
    }

    handleDeleteTask = (id) =>{
        let upadtedTasks = this.state.tasks.filter((task) => task.id != id);
        this.setState({
            tasks: [...upadtedTasks]
        })
    }
  render() {
    return (
        <div className='todo-cont'>
            <div className='todo-navbar'>
                <h1>Todo App</h1>
            </div>
            <div className='todo-input'>
                <input type="text" value={this.state.curTask} onChange={this.handleChange}></input>
                <button onClick={this.handleAddTask}>Add</button>
            </div>
            <div className='todo-tasks'>
                {
                    this.state.tasks.length == 0 ?
                    <h1 style={{textAlign:"center"}}>
                        List is Empty!<br></br>Please Add Tasks
                    </h1>
                    :
                    this.state.tasks.map((taskObj) => (
                        <li key={taskObj.id} className='todo-task'>
                            <h2>{taskObj.task}</h2>
                            <button onClick={() => {this.handleDeleteTask(taskObj.id)}}>Delete</button>
                        </li>
                    ))
                    
                }
            </div>
        </div>
      
    )
  }
}
