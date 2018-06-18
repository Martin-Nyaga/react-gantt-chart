// Action Types

export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

// Action Creators

export function addTask () {
  return {
    type: ADD_TASK,
    payload: {
      start: 1,
      duration: 4,
      description: 'Task Description'
    }
  }
}

export function updateTask (id, props) {
  return {
    type: UPDATE_TASK,
    payload: {
      id,
      ...props
    }
  }
}
