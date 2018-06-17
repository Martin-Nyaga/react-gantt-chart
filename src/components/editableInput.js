import 'styles/editableInput.css'

import React from 'react'
import ID from 'utils/id'

export default class EditableInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false
    }
    this.id = `editable-input-${ID()}`
  }

  toggleEditable (editable) {
    this.setState({
      editable: editable
    })
  }

  componentDidUpdate () {
    if (this.state.editable) {
      document.getElementById(this.id).focus()
    }

    if (this.props.value === '') {
      document.getElementById(this.id).value = this.props.default
    }
  }

  onValueUpdate (value) {
    this.props.onValueUpdate(value)
  }

  render () {
    return (
      <span className='editable-input'>
        {!this.state.editable && (
          <span
            onClick={() => this.toggleEditable(true)}>
            { this.props.value }
            { (this.props.value === '') && ' - ' }
          </span>
        )}

        {this.state.editable && (
          <input id={this.id}
            type={this.props.type}
            className='form-control'
            value={this.props.value}
            onChange={(e) => this.onValueUpdate(e.target.value)}
            onBlur={() => this.toggleEditable(false)}/>
        )}
      </span>
    )
  }
}
