const fs = require('fs')
// const book = {
//   title: 'Road to millions',
//   author: 'Anhad'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)

// const dataString = fs.readFileSync('1-json.json').toString()

// const dataJSON = JSON.parse(dataString)
// console.log(dataJSON.title, dataJSON.author)

const dataString = fs.readFileSync('./1-json.json').toString()

const dataJSON = JSON.parse(dataString)
dataJSON.name = 'Anhad'
dataJSON.age = 21

const newDataString = JSON.stringify(dataJSON)
//console.log(newDataString)

fs.writeFileSync('./1-json.json', newDataString)