import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './currencyCard.module.scss'

class CurrencyCard extends Component {
  render () {
    const { providerName, stats, currency } = this.props
    const [lastPrice, ...history] = stats
    return (
      <div className={styles.card}>
        <h2>{lastPrice ? lastPrice[currency] : '-'}</h2>
        <p className={styles.provider}>{providerName}</p>
        <div className={styles.history}>
          {
            history.map((historyItem) => (
              <div key={historyItem.date} className={styles.item}>
                <p>{historyItem.date}</p>
                <p>{historyItem[currency]}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

CurrencyCard.propTypes = {
  currency: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      btc: PropTypes.string.isRequired,
      eth: PropTypes.string.isRequired,
      xrp: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CurrencyCard
