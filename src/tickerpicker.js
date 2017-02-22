import stocks from './generated/stocks';

let stockData = stocks

export function setStockData(data) {
  stockData = data
}

function lookup(partial, prop) {
  return stockData.filter(company => {
    return company && prop in company && company[prop].toUpperCase().indexOf(partial.toUpperCase()) !== -1
  })
}

export function suggestSymbols(companyPartial) {
  return lookup(companyPartial, 'name')
}

export function getNameForSymbol(symbol) {
  const found = stockData.find(company => company.symbol.toLowerCase() === symbol.trim().toLowerCase())
  return found ? found.name : undefined
}
