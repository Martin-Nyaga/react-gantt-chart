import 'styles/app.css'

import React from 'react'
import Chart from 'containers/chart'
import TaskTable from 'containers/taskTable'

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid pt-4'>
        <div className='row'>
          <div className='col-sm-4 pr-0'>
            <TaskTable />
          </div>
          <div className='col-sm-8 pl-0 chart-main'>
            <Chart />
          </div>
        </div>
      </div>
    )
  }
}
