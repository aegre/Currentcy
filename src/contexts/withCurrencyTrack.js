// Libraries
import React, { Component } from 'react'

// Components
import { CurrencyConsumer, CurrencyProvider } from './currencyTracker'

export default function withCurrencyTrack (WrappedComponent) {
  return class withCurrencyTrack extends Component {
    render () {
      return (
        <CurrencyProvider>
          <CurrencyConsumer>
            {(context) => (
              <WrappedComponent
                {...this.props}
                {...context}
              />
            )}
          </CurrencyConsumer>
        </CurrencyProvider>
      )
    }
  }
}
