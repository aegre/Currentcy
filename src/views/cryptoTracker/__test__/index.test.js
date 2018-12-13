// Libraries
import { render } from 'react-testing-library'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
// Components
import CryptoTracker from '..'
import APIMock from 'api'
import { BTC_TYPE } from 'utils/catalogs'

jest.mock('api')
describe('Main view test', () => {
  test('it should call the api on mount', () => {
    render(
      <MemoryRouter >
        <CryptoTracker />
      </MemoryRouter>
    )
    expect(APIMock.Currency.fetchBitlemStats).toHaveBeenCalled()
    expect(APIMock.Currency.fetchCoinrexStats).toHaveBeenCalled()
    expect(APIMock.Currency.fetchBitsoStats).toHaveBeenCalledWith(BTC_TYPE)
  })
})
