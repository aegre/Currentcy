import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CurrencyCard from 'components/currencyCard'
import styles from './currencyComprarer.module.scss'

class CurrencyComparer extends Component {
  render () {
    const { bitsoStats, bitlemStats, coinrexStats, currency } = this.props
    return (
      <div className={styles.comparer}>
        <CurrencyCard providerName='bitso' stats={bitsoStats} currency={currency} />
        <CurrencyCard providerName='bitlem' stats={bitlemStats} currency={currency} />
        <CurrencyCard providerName='coinrex' stats={coinrexStats} currency={currency} />
      </div>
    )
  }
}

CurrencyComparer.propTypes = {
  currency: PropTypes.string.isRequired,
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

export default CurrencyComparer
