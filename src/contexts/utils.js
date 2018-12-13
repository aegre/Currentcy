export const processCoinrexResponse = ({ data: {
  data: { stats }
} }) => (
  Object.keys(stats).reduce((previous, currency) => (
    {
      ...previous,
      [currency.toLowerCase()]: stats[currency].last_price
    }
  ), {})
)

export const processBitlemResponse = ({
  data
}) => (
  data.reduce((previous, currencyData) => (
    {
      ...previous,
      [currencyData.asset_symbol.toLowerCase()]: currencyData.ask_price
    }
  ), {})
)
