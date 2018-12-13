// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// The actual context
const CurrencyContext = React.createContext({})

/**
 * The refreshing time
 */
const refreshTime = 15000

class CurrencyProvider extends Component {
  state = {
    bitsoStats: {},
    bitlemStats: {},
    coinrexStats: {}
  }

  componentDidMount () {
    // Make an initial fetch
    this.getBitsoStats()
    this.getBitlemStats()
    this.getCoinrexStats()
    // configure the timers to make continue requests
    this.setupTimers()
  }

  getBitsoStats = () => {

  }

  getCoinrexStats = () => {

  }

  getBitlemStats = () => {

  }

  setupTimers = () => {
    this.bitsoTimer = window.setInterval(
      this.getBitsoStats, refreshTime
    )
    this.bitlemTimer = window.setInterval(
      this.getBitlemStats, refreshTime
    )
    this.coinrexTimer = window.setInterval(
      this.getCoinrexStats, refreshTime
    )
  }

  render () {
    const { children } = this.props
    return (
      <CurrencyConsumer.Provider
        value={{ ...this.state }}
      >
        {children}
      </CurrencyConsumer.Provider>
    )
  }
}

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const CurrencyConsumer = CurrencyContext.Consumer

export { CurrencyProvider, CurrencyConsumer }
