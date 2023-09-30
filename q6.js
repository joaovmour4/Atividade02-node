async function gerarLog(value){
    return new Promise((resolve, reject) =>{
        resolve(value)
    })
}

async function gerarLogDelay(value){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(value), 2000)
    })
}

const promise1 = gerarLogDelay('Primeira promise')
const promise2 = gerarLog('Segunda Promise')
const promise3 = gerarLog('Terceira Promise')

Promise.race([promise1, promise2, promise3])
    .then(result => console.log(`A promise de log "${result}" foi resolvida primeiro!`))
    .catch(error => console.error(error))