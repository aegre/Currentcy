import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'
import 'css/main.scss'
import MainContent from 'components/mainContent'

class App extends Component {
  render () {
    return (

      <div className="App">
        <header>
          <nav>
            CurrentCy
          </nav>
        </header>
        <MainContent>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MainContent>
      </div>
    )
  }
}

export default App
