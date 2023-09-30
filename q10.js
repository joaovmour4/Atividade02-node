const fs = require('fs')

async function readdir(loc){
    return new Promise((resolve, reject) => {
        fs.readdir(loc, (err, arqs) =>{
            resolve(arqs)
        })
    })
}

const prom = readdir('./')
    .then((arqs)=>console.log(arqs))

