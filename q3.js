async function gerarNum(){
    return new Promise((resolve, reject) =>{
        resolve(Math.random())
    })
}

const promises = [gerarNum(), gerarNum(), gerarNum()]

Promise.all(promises)
    .then(values => console.log(values))