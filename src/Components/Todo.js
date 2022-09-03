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

    handleAddTask = (e) =>{
        let tasks = this.state.tasks;
        let tasksArr = JSON.parse(localStorage.getItem("tasks"));
        let uid = uuidv4();
        let newTask = {id: uid,task: this.state.curTask};
        // if first task is being added
        if(!tasksArr){
            tasksArr = [];
        }
        tasksArr.push(newTask);
        e.preventDefault();
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
        this.setState({
            tasks: [...tasks,newTask],
            curTask: ""
        })
    }

    handleDeleteTask = (id) =>{
        let upadtedTasks = this.state.tasks.filter((task) => task.id != id);
        localStorage.setItem("tasks", JSON.stringify(upadtedTasks));
        this.setState({
            tasks: [...upadtedTasks]
        })
    }

    async componentDidMount(){
        console.log("Hello there!");
        let tasksArr = JSON.parse(localStorage.getItem("tasks"));
        if(!tasksArr){
            tasksArr = [];
        }
        this.setState({
            tasks: tasksArr
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
                    !this.state.tasks || this.state.tasks.length == 0 ?
                    <div>
                        <h1 style={{textAlign:"center"}}>List is Empty!<br></br>Please Add Tasks</h1>
                    </div>
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
