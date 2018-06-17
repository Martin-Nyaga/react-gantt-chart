import { connect } from 'react-redux'
import * as actions from 'actions'
import Chart from 'components/taskTable'

const matchStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const matchDispatchToProps = dispatch => {
  return {
    updateTask: (id, props) => {
      dispatch(actions.updateTask(id, props))
    },
    addTask: () => {
      dispatch(actions.addTask())
    }
  }
}

const taskTable = connect(
  matchStateToProps,
  matchDispatchToProps
)(Chart)

export default taskTable
