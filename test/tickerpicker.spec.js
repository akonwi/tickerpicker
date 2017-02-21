import tape from 'tape'
import * as ticker from '../src/tickerpicker'

ticker.setStockData([
  {"name":"ABC Products Company","symbol":"ABC"},
  {"name":"BCD Inc","symbol":"BCD"},
  {"name":"XYZ Products LLC","symbol":"XYZ"}
])

tape('::suggestSymbols suggests symbols based on partial comany names', t => {
  t.same(ticker.suggestSymbols("prod").map(c => c.symbol), [ "ABC", "XYZ" ])
  t.end()
})

tape('::suggestCompanyNames suggests company names based on partial tickers', t => {
  t.same(ticker.suggestCompanyNames("BC").map(c => c.name), [ "ABC Products Company", "BCD Inc" ])
  t.end()
})
