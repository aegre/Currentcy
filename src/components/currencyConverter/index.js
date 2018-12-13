import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './currencyConverter.module.scss'

class CurrencyConverter extends Component {
  state = {
    conversionAmount: 0
  }
  handleAmountChange = e => {
    const { target: { value: conversionAmount } } = e
    this.setState({ conversionAmount })
  }
  render () {
    const { conversionAmount } = this.state
    const { bitsoValue, bitlemValue, coinrexValue } = this.props
    return (
      <div className={styles.converter}>
        <div>
          <h3>CONVERT</h3>
          <br />
          <label htmlFor='conversion-input'>
            MXN
            <input value={conversionAmount} id='conversion-input' type='number' onChange={this.handleAmountChange}></input>
          </label>
        </div>
        <div>
          <h3>Bitso</h3>
          <p>{bitsoValue ? conversionAmount / bitsoValue : 0}</p>
        </div>
        <div>
          <h3>Bitlem</h3>
          <p>{bitlemValue ? conversionAmount / bitlemValue : 0}</p>
        </div>
        <div>
          <h3>Coinrex</h3>
          <p>{coinrexValue ? conversionAmount / coinrexValue : 0}</p>
        </div>
      </div>
    )
  }
}

CurrencyConverter.propTypes = {
  bitsoValue: PropTypes.number.isRequired,
  bitlemValue: PropTypes.number.isRequired,
  coinrexValue: PropTypes.number.isRequired
}

export default CurrencyConverter
