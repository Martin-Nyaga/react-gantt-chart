import './Chart.css'

import React from 'react'
import $ from 'jquery'
import arrayMove from 'array-move'
import 'jquery-ui/ui/widgets/sortable'

import Item from 'components/Item/Item'

export default class Chart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  get sortableElement () { return $('#items-sortable') }

  addItem () {
    let lastItem = this.state.items[this.state.items.length - 1]

    let item = {
      id: this.state.items.length + 1,
      start: lastItem ? (lastItem.start + lastItem.duration) : 0,
      duration: 4,
      position: this.state.items.length,
      description: "Hello World"
    }

    this.setState({
      items: this.state.items.concat([item])
    })
  }

  updateItem (itemId, props) {
    this.setState({
      items: this.state.items.map(i => {
        if (i.id === itemId) {
          i = { ...i, ...props }
        }
        return i
      })
    })
  }


  updateItemPosition (itemId, newIndex) {
    let oldIndex = this.state.items.findIndex(i => i.id === itemId)
    let items = this.state.items.slice()
    let newItems = arrayMove(items, oldIndex, newIndex)

    this.setState({
      items: newItems.map((item, index) => {
        return { ...item, position: index }
      })
    })
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
      handle: '.gantt-item-sort-handle',
      stop: (e, ui) => {
        this.updateItemPosition(
          Number(ui.item.data('item-id')),
          ui.item.index()
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
          {this.state.items.map(item => (
            <Item key={item.id} {...item} updateItem={this.updateItem.bind(this)} sortableElementId={this.sortableElement.attr('id')} />
          ))}
        </div>
        <button className='btn btn-primary' onClick={() => this.addItem()}>
          Add Item
        </button>
      </div>
    )
  }
}
