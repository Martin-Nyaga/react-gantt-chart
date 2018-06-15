import './Item.css'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/resizable.css'

import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/resizable'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/sortable'

export default class Item extends React.Component {
  get xStep () { return 50 }
  get $el () { return $(`.gantt-item#item-${this.props.id}`) }

  handleResize (ui) {
    let newDuration = ui.size.width / this.xStep
    this.props.updateItem(
      this.props.id,
      { duration: newDuration }
    )
  }

  handleDrag (ui) {
    let newStart = this.$el.left / this.xStep
    this.props.updateItem(
      this.props.id,
      { start: newStart }
    )
  }

  componentDidMount () {
    this.$el.resizable({
      handles: 'e, w',
      grid: [this.xStep],
      stop: (e, ui) => this.handleResize(ui)
    })

    this.$el.draggable({
      axis: 'x',
      grid: [this.xStep],
      stop: (e, ui) => this.handleDrag(ui)
    })
  }

  componentWillUnmount () {
    this.$el.resizable("destroy")
    this.$el.draggable("destroy")
  }

  getStyles () {
    let width = (this.props.duration * this.xStep) + "px"
    let left = (this.props.start * this.xStep) + "px"

    return {
      width: width,
      left: left
    }
  }

  render () {
    return (
      <div className='gantt-item-container' data-item-id={this.props.id}>
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
