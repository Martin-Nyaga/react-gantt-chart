import React from 'react'
import EditableInput from './editableInput'
import Icon from '@fortawesome/react-fontawesome'

export default class TaskRow extends React.Component {
  updateValue (prop, value) {
    this.props.updateTask({ [prop]: value})
  }

  render () {
    return (
      <tr data-task-id={this.props.id}>
        <td style={{ width: '5%' }} className='sort-handle'>
          <Icon icon='sort' size='lg'/>
        </td>
        <td style={{ width: '50%' }}>
          <EditableInput value={this.props.description}
            type='text'
            default='Task Description'
            onValueUpdate={(newValue) => this.updateValue('description', newValue)} />
        </td>
        <td style={{ width: '15%' }}>
          <EditableInput value={this.props.start}
            type='number'
            default={1}
            onValueUpdate={(newValue) => this.updateValue('start', newValue)} />
        </td>
        <td style={{ width: '10%' }}>
          <span>
            { Number(this.props.start - 1) + Number(this.props.duration) }
          </span>
        </td>
        <td style={{ width: '20%' }}>
          <EditableInput value={this.props.duration}
            type='number'
            default={4}
            onValueUpdate={(newValue) => this.updateValue('duration', newValue)} />
        </td>
      </tr>
    )
  }
}
