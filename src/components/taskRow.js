import React from 'react'
import EditableInput from './editableInput'

export default class TaskRow extends React.Component {
  updateValue (prop, value) {
    this.props.updateTask({ [prop]: value})
  }

  render () {
    return (
      <tr>
        <td style={{ width: '20%' }}>
          <EditableInput value={this.props.description}
            type='text'
            default='Task Description'
            onValueUpdate={(newValue) => this.updateValue('description', newValue)} />
        </td>
        <td style={{ width: '20%' }}>
          <EditableInput value={this.props.start}
            type='number'
            default={0}
            onValueUpdate={(newValue) => this.updateValue('start', newValue)} />
        </td>
        <td style={{ width: '20%' }}>
          <span>
            { Number(this.props.start) + Number(this.props.duration) }
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
