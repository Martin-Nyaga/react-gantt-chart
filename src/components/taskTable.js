import 'styles/taskTable.css'
import React from 'react'
import TaskRow from './taskRow'

export default class TaskTable extends React.Component {
  render () {
    return (
      <table className='table table-sm task-table'>
        <thead>
          <tr>
            <th scope="col" style={{ width: '40%' }}>Task Description</th>
            <th scope="col" style={{ width: '20%' }} >Start</th>
            <th scope="col" style={{ width: '20%' }} className='col-xs-2'>End</th>
            <th scope="col" style={{ width: '20%' }} className='col-xs-2'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map(task => (
            <TaskRow key={task.id}
              {...task}
              updateTask={(attrs) => this.props.updateTask(task.id, attrs)} />
          ))}
        </tbody>
      </table>
    )
  }
}
