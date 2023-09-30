async function gerarNum(min, max){
    return new Promise((resolve, reject)=>{
        try{
            resolve(Math.random() * (max - min) + min)
            // Para testar o tratamento de erros
            // resolve(Math.rando() * (max - min) + min)
        }
        catch(error){
            resolve(console.log(error.message))
        }
    })
}

async function promises(proms){
    return Promise.all(proms).then((values)=>{
        console.log(values)
    })
}

const promisesVec = promises([gerarNum(1, 5), gerarNum(5, 10), gerarNum(-1, 5)])