import 'styles/chart.css'

import React from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/sortable'

import Item from './item'

export default class Chart extends React.Component {
  get sortableElement () { return $('#items-sortable') }

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
      handle: '.gantt-item-sort-handle',
      stop: (e, ui) => {
        this.props.updateItem(
          Number(ui.item.data('item-id')),
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
      <div className='chart-box'>
        <div id='items-sortable'>
          {this.props.items.map(item => (
            <Item key={item.id}
              {...item}
              updateItem={(props) => this.props.updateItem(item.id, props)}
              sortableElementId={this.sortableElement.attr('id')} />
          ))}
        </div>
        <button className='btn btn-primary' onClick={() => this.props.addItem()}>
          Add Item
        </button>
      </div>
    )
  }
}
