// Action Types

export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

// Action Creators

export function addItem () {
  return {
    type: ADD_ITEM,
    payload: {
      start: 0,
      duration: 4,
      description: ''
    }
  }
}

export function updateItem (id, props) {
  return {
    type: UPDATE_ITEM,
    payload: {
      id,
      ...props
    }
  }
}
