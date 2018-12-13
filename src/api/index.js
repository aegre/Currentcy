import axios from 'axios'

const makeRequest = url => axios.get(url)

class Currency {
  static fetchBitsoStats = currency => makeRequest(`https://api.bitso.com/v3/ticker/?book=${currency}_mxn`)
  static fetchCoinrexStats = () => makeRequest('https://api.coinrex.io/v1/markets/stats')
  static fetchBitlemStats = () => makeRequest('https://bitlem.com/api/store')
}

export default {
  Currency
}
