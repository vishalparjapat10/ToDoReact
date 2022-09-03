import React, { Component } from 'react';
import './Todo.css'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[{task:"JavaScript"}]
        }
    }
  render() {
    return (
        <div className='todo-cont'>
            <div className='todo-navbar'>
                <h1>Todo App</h1>
            </div>
            <div className='todo-input'>
                <input type="text" onChange={this.handleChange}></input>
                <button>Add</button>
            </div>
            <div className='todo-tasks'>
                {
                    this.state.tasks.length == 0 ?
                    <h1>
                        List is Empty!<br></br>Please Add Tasks
                    </h1>
                    :
                    this.state.tasks.map((taskObj) => (
                        <li className='todo-task'>
                            <h2>{taskObj.task}</h2>
                            <button>Delete</button>
                        </li>
                    ))
                    
                }
            </div>
        </div>
      
    )
  }
}
