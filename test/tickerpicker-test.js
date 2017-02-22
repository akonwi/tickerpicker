import tape from 'tape'
import * as ticker from '../src/tickerpicker'

// ticker.setStockData([
//   {"name":"ABC Products Company","symbol":"ABC"},
//   {"name":"BCD Inc","symbol":"BCD"},
//   {"name":"XYZ Products LLC","symbol":"XYZ"}
// ])
//
// tape("::suggestSymbols suggests symbols based on partial comany names", t => {
//   t.same(ticker.suggestSymbols("prod").map(c => c.symbol), [ "ABC", "XYZ" ])
//   t.end()
// })

tape("::getNameForSymbol returns a company name based on ticker", t => {
  t.is(ticker.getNameForSymbol("f"), "Ford Motor Company")
  t.end()
})

tape("::getNameForSymbol returns undefined if there is no company with the symbol", t => {
  t.is(ticker.getNameForSymbol("POOP"), undefined)
  t.end()
})
