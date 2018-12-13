// Libraries
import { render } from 'react-testing-library'
import React from 'react'
// Components
import CurrencyCard from '..'
import { BTC_TYPE, ETH_TYPE } from 'utils/catalogs'

const testProvider = 'provider-test'
describe('Main view test', () => {
  test('it should show just the provider name on mount', () => {
    const { getByText } = render(
      <CurrencyCard providerName={testProvider} stats={[]} currency={''} />
    )
    expect(getByText(testProvider)).toBeTruthy()
  })

  test('it should show the stats of the currency', () => {
    const stats = [
      { date: '', [ETH_TYPE]: '30000', [BTC_TYPE]: '0' }
    ]

    const currency = ETH_TYPE
    const { getByText } = render(
      <CurrencyCard providerName={testProvider} stats={stats} currency={currency} />
    )
    const expectedValue = stats[0][currency]
    expect(getByText(expectedValue)).toBeTruthy()
    expect(getByText(expectedValue).nodeName).toBe('H2')
  })

  test('it should render the history', () => {
    const currency = ETH_TYPE
    const stats = [
      { date: 'date1', [currency]: '3000' },
      { date: 'date2', [currency]: '4000' }
    ]
    const { getByText } = render(
      <CurrencyCard providerName={testProvider} stats={stats} currency={currency} />
    )

    const [lastest, firstRow] = stats

    const mainComponent = getByText(lastest[currency])
    expect(mainComponent).toBeTruthy()
    expect(() => getByText(lastest.date)).toThrow()
    expect(mainComponent.nodeName).toBe('H2')

    const rowComponent = getByText(firstRow[currency])
    expect(rowComponent).toBeTruthy()
    expect(getByText(firstRow.date)).toBeTruthy()
    expect(rowComponent.nodeName).toBe('P')
  })
})
