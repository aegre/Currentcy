/**
 * Bitso currency type
 * @type {string}
 */
export const BTC_TYPE = 'btc'

/**
 * Ethereum currency type
 * @type {string}
 */
export const ETH_TYPE = 'eth'

/**
 * Ripple currency type
 * @type {string}
 */
export const XRP_TYPE = 'xrp'

/**
 * An array of available currency types
 * @type {string[]}
 */
export const CURRENCY_TYPES = [
  BTC_TYPE,
  ETH_TYPE,
  XRP_TYPE
]

/**
 * @typedef {object} Option
 * @property {string} label
 * @property {string} value
 *
 */
/**
 * A generated array for currency options
 * @type {Option[]}
 */
export const CURRENCY_OPTIONS = CURRENCY_TYPES.map(currencyType => (
  {
    label: currencyType,
    value: currencyType
  }
))
