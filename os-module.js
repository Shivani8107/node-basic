// Built in modules

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns uptime in sec
console.log(`${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);