// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'
import { CURRENCY_TYPES } from 'utils/catalogs'

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

  getBitsoStats = async () => {
    try {
      // Generate a bitso object
      let bitsoStatsObject = {}
      // Fetch the currencies individually
      for (const currency of CURRENCY_TYPES) {
        const response = await API.Currency.fetchBitsoStats(currency)
      }
    } catch (error) {
      console.error(error)
    }
  }

  getCoinrexStats = async () => {
    try {
      const response = await API.Currency.fetchCoinrexStats()
    } catch (error) {
      console.error(error)
    }
  }

  getBitlemStats = async () => {
    try {
      const response = await API.Currency.fetchBitlemStats()
    } catch (error) {
      console.error(error)
    }
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
      <CurrencyContext.Provider
        value={{ ...this.state }}
      >
        {children}
      </CurrencyContext.Provider>
    )
  }
}

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const CurrencyConsumer = CurrencyContext.Consumer

export { CurrencyProvider, CurrencyConsumer }
