import React, { Component} from 'react'
import Task from './task.js'

class TaskList extends Component {
  render () {
    return (
      <div>
        { this.props.tasks.map((item, index) => {
          return (
            <Task key={index} time={item.time} period={item.period} title={item.title} description={item.description} />
          )
        }) }
      </div>
    )
  }
}

export default TaskList
