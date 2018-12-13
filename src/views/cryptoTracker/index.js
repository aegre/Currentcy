import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CURRENCY_OPTIONS } from 'utils/catalogs'
import Selector from 'components/selector'
import withCurrencyTrack from 'contexts/withCurrencyTrack'
class CryptoTracker extends Component {
  render () {
    const { currentCurrency } = this.props
    return (
      <React.Fragment>
        <Selector options={CURRENCY_OPTIONS} selected={currentCurrency} />
      </React.Fragment>
    )
  }
}

CryptoTracker.propTypes = {
  currentCurrency: PropTypes.string.isRequired
}

export default withCurrencyTrack(CryptoTracker)
