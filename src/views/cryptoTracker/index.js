import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CryptoTracker extends Component {
  render () {
    const { currentCurrency } = this.props
    return (
      <div>
        {currentCurrency}
      </div>
    )
  }
}

CryptoTracker.propTypes = {
  currentCurrency: PropTypes.string.isRequired
}

export default CryptoTracker
