import './App.css'

import React from 'react'
import Chart from './components/Chart/Chart'

class App extends React.Component {
  render() {
    return (
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-sm-12'>
            <Chart />
          </div>
        </div>
      </div>
    )
  }
}

export default App
