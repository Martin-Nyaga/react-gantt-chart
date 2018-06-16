import { connect } from 'react-redux'
import * as actions from 'actions'
import Chart from 'components/chart'

const matchStateToProps = state => {
  return {
    items: state.items
  }
}

const matchDispatchToProps = dispatch => {
  return {
    updateItem: (id, props) => {
      dispatch(actions.updateItem(id, props))
    },
    addItem: () => {
      dispatch(actions.addItem())
    }
  }
}

const chartContainer = connect(
  matchStateToProps,
  matchDispatchToProps
)(Chart)

export default chartContainer
