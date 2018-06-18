import 'styles/taskTable.css'
import React from 'react'
import TaskRow from './taskRow'
import Icon from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/sortable'

export default class TaskTable extends React.Component {
  get sortableElement () {
    return $('.task-table tbody')
  }

  componentDidMount () {
    this.initSortable()
  }

  componentDidUpdate () {
    this.initSortable()
  }

  componentWillUpdate () {
    this.destroySortable()
  }

  componentWillUnmount () {
    this.destroySortable()
  }

  initSortable () {
    this.sortableElement.sortable({
      items: 'tr:not(.not-sortable)',
      handle: 'td.sort-handle',
      stop: (e, ui) => {
        this.props.updateTask(
          ui.item.data('task-id'),
          { position: ui.item.index() }
        )
      }
    })
  }

  destroySortable () {
    this.sortableElement.sortable('destroy')
  }

  render () {
    return (
      <table className='table table-sm task-table'>
        <thead>
          <tr>
            <th scope="col" style={{ width: '5%' }}></th>
            <th scope="col" style={{ width: '50%' }}>Task Description</th>
            <th scope="col" style={{ width: '15%' }} >Start</th>
            <th scope="col" style={{ width: '10%' }} className='col-xs-2'>End</th>
            <th scope="col" style={{ width: '20%' }} className='col-xs-2'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map(task => (
            <TaskRow key={task.id}
              {...task}
              updateTask={(attrs) => this.props.updateTask(task.id, attrs)} />
          ))}
          <tr className='not-sortable'>
            <td colSpan='5'>
              <button className='btn btn-link'
                onClick={() => this.props.addTask()}>
                <Icon icon='plus-circle' className='mr-2'/>
                Task
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
