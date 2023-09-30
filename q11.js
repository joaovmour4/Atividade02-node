const fs = require('fs')

async function readdir(path){
    return new Promise((resolve, reject)=>{
        fs.readdir(path, (err, files)=>{
            resolve(files)
        })
    })
}

async function isDirectory(dirPath){
    return new Promise((resolve, reject)=>{
        fs.stat(dirPath, (err, stats)=>{
            if(stats.isDirectory){
                resolve(dirPath)
            }
        })
    })
}
const promises = []
const promise = readdir('./')
    .then(value =>{
        value.forEach(element => {
            promises.push(isDirectory(element))
        });
        // console.log(value)
    })
    .catch(error => console.error(error))

Promise.all(promises).then(results => console.log(results))