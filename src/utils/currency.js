const formatter = new Intl.NumberFormat('ua-UA', { currency: 'UAH', style: 'currency', currencyDisplay: 'symbol' })

export function currency (value) {
  return formatter.format(value)
}
