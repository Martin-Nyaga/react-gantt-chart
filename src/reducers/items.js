import * as actions from 'actions'
import ID from 'utils/id'
import arrayMove from 'array-move'

const itemsReducer = function (items = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [
        ...items,
        {
          ...action.payload,
          position: items.length,
          id: ID()
        },
      ]

    case actions.UPDATE_ITEM:
      let itemId = action.payload.id
      let newItemProps = action.payload

      // If position is changed, swap item order
      if (newItemProps.position !== undefined) {
        let oldIndex = items.findIndex(i => i.id === itemId)
        items = arrayMove(items, oldIndex, newItemProps.position)
      }

      return items.map((item, index) => {
        if (item.id === itemId) {
          item = { ...item, ...newItemProps }
        }

        // always update position
        return { ...item, position: index }
      })

    default:
      return items
  }
}

export default itemsReducer
