const {readFileSync, writeFileSync} = require('fs')
console.log('starting task')
const first = readFileSync('./content/subfolder/test', 'utf-8')
const second = readFileSync('./content/test2.txt', 'utf-8')

console.log( first + '\n'+ second);
console.log('Done with task');

writeFileSync(
   './content/newFile.txt',
   `Here is result: ${first}, ${second} \n abc`,
   {flag: 'a'}
) // flag: 'a' appends to the original file content
console.log('starting next task');