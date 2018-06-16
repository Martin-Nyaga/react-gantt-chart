import '../styles/item.css'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/resizable.css'

import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/resizable'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/sortable'

export default class Item extends React.Component {
  get gridSize () { return 50 }
  get $el () { return $(`.gantt-item#item-${this.props.id}`) }

  handleResize (ui) {
    let newDuration = ui.size.width / this.gridSize
    this.props.updateItem(
      this.props.id,
      { duration: newDuration }
    )
  }

  handleDrag (ui) {
    let newStart = ui.position.left / this.gridSize
    this.props.updateItem(
      this.props.id,
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
      <div className='gantt-item-container'>
        <div className='gantt-item-sort-handle'>
          <span className='center-text'>
            {this.props.position + 1}
          </span>
        </div>
        <div id={'item-' + this.props.id} className='gantt-item bg-primary text-white'
              style={this.getStyles()}>
          <span className='resize-handle left'></span>
          <span className='center-text'>
            {this.props.description}
          </span>
          <span className='resize-handle right'></span>
        </div>
      </div>
    )
  }
}
