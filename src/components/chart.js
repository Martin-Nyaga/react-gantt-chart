import 'styles/chart.css'

import React from 'react'
import TaskBlock from './taskBlock'

export default class Chart extends React.Component {
  get colPixelWidth () { return 50 }

  // componentDidMount () {
  //   this.initSortable()
  // }

  // componentDidUpdate () {
  //   this.initSortable()
  // }

  // componentWillUpdate () {
  //   this.destroySortable()
  // }

  // componentWillUnmount () {
  //   this.destroySortable()
  // }

  initSortable () {
    this.sortableElement.sortable({
      handle: '.gantt-task-sort-handle',
      stop: (e, ui) => {
        this.props.updateTask(
          Number(ui.item.data('task-id')),
          { position: ui.item.index() }
        )
      }
    })
  }

  destroySortable () {
    this.sortableElement.sortable('destroy')
  }

  totalDuration () {
    let end = 20

    this.props.tasks.forEach(task => {
      let taskEnd = Number(task.start) + Number(task.duration)
      if (taskEnd > end) end = taskEnd
    })

    return end
  }

  renderTask (task) {
    return (
      <TaskBlock key={task.id}
        {...task}
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
          width: this.colPixelWidth + 'px'
        }}>
        <span className='small text-muted duration-title align-middle'>
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
          style={{ width: (this.totalDuration() * 50) + "px" }}>
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
        <button className='btn btn-primary' onClick={() => this.props.addTask()}>
          Add Task
        </button>
      </div>
    )
  }
}
