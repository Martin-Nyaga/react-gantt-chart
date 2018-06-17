import 'styles/chart.css'

import React from 'react'

import TaskBlock from './taskBlock'

export default class Chart extends React.Component {
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

  renderTask (task) {
    return (
      <TaskBlock key={task.id}
        {...task}
        updateTask={(attrs) => this.props.updateTask(task.id, attrs)}/>
    )
  }

  render () {
    return (
      <div className='chart-container'>
        <table className='table table-sm chart'>
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
