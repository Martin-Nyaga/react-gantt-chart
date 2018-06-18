import 'styles/chart.css'

import React from 'react'
import TaskBlock from './taskBlock'

export default class Chart extends React.Component {
  get gridSize () { return 70 }

  totalDuration () {
    let end = 10

    this.props.tasks.forEach(task => {
      let taskEnd = Number(task.start) + Number(task.duration)
      if (taskEnd > end) end = taskEnd
    })

    return end + 2
  }

  renderTask (task) {
    return (
      <TaskBlock key={task.id}
        {...task}
        gridSize={this.gridSize}
        updateTask={(attrs) => this.props.updateTask(task.id, attrs)}/>
    )
  }

  renderBackgroundColumns () {
    let columns = Array.from(
      { length: this.totalDuration() },
      (x, i) => i
    )

    return columns.map((_, i) => (
      <div key={i} className='column border-right'
        style={{
          width: this.gridSize + 'px'
        }}>
        <span className='text-muted duration-title text-center'>
          Week {i + 1}
        </span>
      </div>
    ))
  }

  render () {
    return (
      <div className='chart-container'>
        <div className='background'>
          {this.renderBackgroundColumns()}
        </div>
        <table className='table table-sm chart'
          style={{ width: (this.totalDuration() * this.gridSize) + "px" }}>
          <thead>
            <tr>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((t) => this.renderTask(t))}
          </tbody>
        </table>
      </div>
    )
  }
}
