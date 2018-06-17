import * as actions from 'actions'
import ID from 'utils/id'
import arrayMove from 'array-move'

const addTask = (tasks, action) => {
  return [
    ...tasks,
    {
      ...action.payload,
      position: tasks.length,
      id: ID()
    },
  ]
}

const updateTask = (tasks, action) => {
  let taskId = action.payload.id
  let newTaskProps = action.payload

  // If position is changed, swap task order
  if (newTaskProps.position !== undefined) {
    let oldIndex = tasks.findIndex(i => i.id === taskId)
    tasks = arrayMove(tasks, oldIndex, newTaskProps.position)
  }

  return tasks.map((task, index) => {
    if (task.id === taskId) {
      task = { ...task, ...newTaskProps }
    }

    // always update position
    return { ...task, position: index }
  })
}

const tasksReducer = function (tasks = [], action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return addTask(tasks, action)

    case actions.UPDATE_TASK:
      return updateTask(tasks, action)

    default:
      return tasks
  }
}

export default tasksReducer
