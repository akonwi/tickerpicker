const fs = require('fs')
const csv = require('csvtojson');

const output = 'src/generated/stocks.js';
const sources = ['./amex.csv', './nasdaq.csv', './nyse.csv'];

const stocks = []

const parsePromise = Promise.all(sources.map(source => {
  return new Promise((resolve, reject) => {
    csv().fromString(fs.readFileSync(`${__dirname}/${source}`, {encoding: 'utf8'}))
    .on('json', object => {
      if (/\^/.test(object.Symbol) === false) {
        stocks.push({name: object.Name.trim(), symbol: object.Symbol.trim()})
      }
    })
    .on('done', error => {
      if (!error) {
        console.log(`Finished converting ${source} to json`)
        resolve()
      }
    })
    .on('error', error => {
      console.error(`There was an error parsing ${source}`, error)
      reject()
    })
  })
}))

parsePromise.then(() => {
  fs.writeFileSync(output, `export default ${JSON.stringify(stocks)}`, 'utf8')
})
