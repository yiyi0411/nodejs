const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log('start')
writeFileSync(
    './content/result.txt',
    `Here is the result:${first}, ${second}`,
    {flag:'a'})

console.log('done with this task')
console.log('starting next task')