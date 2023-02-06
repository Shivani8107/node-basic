const path = require('path')

// path seprator
 console.log(path.sep)

//  join path
const filePath = path.join('/content','subfolder/','test')
const filePath1 = path.join('/content1','subfolder/','test')
console.log(filePath);
console.log(filePath1);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content','subfolder','test')
const absolute1 = path.resolve(__dirname, 'content1','subfolder','test')
console.log(absolute);
console.log(absolute1);

