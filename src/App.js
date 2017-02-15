import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import TaskList from './components/taskList.js'
import Date from './components/date.js'
import Avatar from './components/avatar.js'
import Button from './components/button.js'

class App extends Component {
  render () {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <Date /> <br />
        <TaskList /> <br />
        <Button />
      </div>
    )
  }
}

export default App
