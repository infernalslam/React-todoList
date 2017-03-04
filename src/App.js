import React, { Component } from 'react'
import './App.css'
import TaskList from './components/taskList.js'
import Date from './components/date.js'
import Avatar from './components/avatar.js'
import Button from './components/button.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tasks: [
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '8',
          period: 'AM',
          title: 'Meeting Startup',
          description: '#Reactjs working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '10',
          period: 'PM',
          title: 'Meeting learn Angular',
          description: '#Angular working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '9',
          period: 'AM',
          title: 'Meeting learn Vue.js',
          description: '#Vue.js working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '4',
          period: 'PM',
          title: 'Meeting learn Javascript',
          description: '#Javascript working'
        }
      ]
    }
  }
  addTask () {
    let task = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      time: '8',
      period: 'AM',
      title: 'Meeting Startup',
      description: '#test function'
    }
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks})
  }
  delTask (index) {
    var arr = this.state.tasks.findIndex((item) => item.id === index)
    console.log('this props react : is arr = ', arr, index)
    this.state.tasks.splice(arr, 1)
    this.setState({tasks: this.state.tasks})
  }
  render () {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <Date /> <br />
        <TaskList tasks={this.state.tasks} delTask={this.delTask.bind(this)} /> <br />
        <Button onClick={this.addTask.bind(this)} />
      </div>
    )
  }
}

export default App
