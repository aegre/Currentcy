
const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}
export const dateToString = date => date.toLocaleDateString('es-MX', dateOptions)
