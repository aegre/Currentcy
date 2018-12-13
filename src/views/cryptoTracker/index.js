import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CURRENCY_OPTIONS } from 'utils/catalogs'
import Selector from 'components/selector'
import withCurrencyTrack from 'contexts/withCurrencyTrack'
import CurrencyComparer from 'components/currencyComparer'
import CurrencyConverter from 'components/currencyConverter'
class CryptoTracker extends Component {
  render () {
    const { bitsoStats, bitlemStats, coinrexStats } = this.props
    const { currentCurrency } = this.props
    const [currentBitlem] = bitlemStats
    const [currentBitso] = bitsoStats
    const [currentCoinrex] = coinrexStats
    return (
      <React.Fragment>
        <Selector options={CURRENCY_OPTIONS} selected={currentCurrency} />
        <CurrencyComparer bitsoStats={bitsoStats} bitlemStats={bitlemStats} coinrexStats={coinrexStats} currency={currentCurrency} />
        <CurrencyConverter
          coinrexValue={currentCoinrex ? Number(currentCoinrex[currentCurrency]) : 0}
          bitsoValue={currentBitso ? Number(currentBitso[currentCurrency]) : 0}
          bitlemValue={currentBitlem ? Number(currentBitlem[currentCurrency]) : 0}
        />
      </React.Fragment>
    )
  }
}

CryptoTracker.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  bitsoStats: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    btc: PropTypes.string.isRequired,
    eth: PropTypes.string.isRequired,
    xrp: PropTypes.string.isRequired
  })).isRequired,
  bitlemStats: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    btc: PropTypes.string.isRequired,
    eth: PropTypes.string.isRequired,
    xrp: PropTypes.string.isRequired
  })).isRequired,
  coinrexStats: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    btc: PropTypes.string.isRequired,
    eth: PropTypes.string.isRequired,
    xrp: PropTypes.string.isRequired
  })).isRequired
}

export default withCurrencyTrack(CryptoTracker)
