import React, { Component } from 'react'
// import logo from './logo.svg'
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
          time: '8',
          period: 'AM',
          title: 'Meeting Startup',
          description: '#Reactjs working'
        },
        {
          time: '10',
          period: 'PM',
          title: 'Meeting learn Angular',
          description: '#Angular working'
        },
        {
          time: '9',
          period: 'AM',
          title: 'Meeting learn Vue.js',
          description: '#Vue.js working'
        },
        {
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
      time: '8',
      period: 'AM',
      title: 'Meeting Startup',
      description: '#test function'
    }
    this.state.tasks.push(task)
    this.setState({task: this.state.tasks})
    console.log('YES')
  }
  render () {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <Date /> <br />
        <TaskList tasks={this.state.tasks} /> <br />
        <Button onClick={this.addTask.bind(this)} />
      </div>
    )
  }
}

export default App
