import 'styles/taskBlock.css'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/resizable.css'

import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/resizable'
import 'jquery-ui/ui/widgets/draggable'

export default class TaskBlock extends React.Component {
  get gridSize () { return 50 }
  get $el () { return $(`.gantt-task#task-${this.props.id}`) }

  handleResize (ui) {
    let newDuration = ui.size.width / this.gridSize
    this.props.updateTask(
      { duration: newDuration }
    )
  }

  handleDrag (ui) {
    let newStart = ui.position.left / this.gridSize
    this.props.updateTask(
      { start: newStart }
    )
  }

  componentDidMount () {
    this.$el.resizable({
      handles: 'e, w',
      grid: [this.gridSize, 0],
      minWidth: this.gridSize,
      stop: (e, ui) => this.handleResize(ui)
    })

    this.$el.draggable({
      axis: 'x',
      grid: [this.gridSize, 0],
      stop: (e, ui) => this.handleDrag(ui)
    })
  }

  componentWillUnmount () {
    this.$el.resizable("destroy")
    this.$el.draggable("destroy")
  }

  getStyles () {
    let width = (this.props.duration * this.gridSize) + "px"
    let left = (this.props.start * this.gridSize) + "px"

    return {
      width: width,
      left: left
    }
  }

  render () {
    return (
      <tr>
        <td className='gantt-task-container'>
          <div id={'task-' + this.props.id} className='gantt-task bg-primary text-white rounded'
                style={this.getStyles()}>
            <span className='resize-handle left'></span>
            <span className='resize-handle right'></span>
          </div>
        </td>
      </tr>
    )
  }
}
