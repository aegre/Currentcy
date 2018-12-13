import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'
import 'css/main.scss'

class App extends Component {
  render () {
    return (

      <div className="App">
        <header className='App-header'>
          <nav>
            CurrentCy
          </nav>
        </header>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
