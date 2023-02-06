const {readFile, writeFile} = require('fs')
console.log('Starting task');
readFile('./content/subfolder/test', 'utf-8', (err, res)=>{
    if(err) {
        console.log(err);
        return
    }
    const first = res
    readFile('./content/test2.txt', 'utf-8', (err,res)=>{
        if(err){
            console.log(err);
            return
        }
        const second = res
        writeFile('./content/asyncResult.txt', 
        `Asynch's result is: ${first +' '+ second}`,
        (err,res) => {
            if(err) {
                console.log(err);
                return
            }
            console.log(res)
            console.log('Done with the task');
        }) 

    })
})
console.log('Starting next task');