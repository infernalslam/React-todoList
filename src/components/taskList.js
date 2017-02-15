import React, { Component} from 'react'
import Task from './task.js'

class TaskList extends Component {
  render () {
    var data = [
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
    return (
      <div>
        { data.map((item, index) => {
          return (
            <Task key={index} time={item.time} period={item.period} title={item.title} description={item.description} />
          )
        }) }
      </div>
    )
  }
}

export default TaskList
