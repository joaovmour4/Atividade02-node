async function print(){
    console.log('Depois de 2sec.')
}

const promise = new Promise(() =>{
    setTimeout(()=>{
        print()
    }, 2000)
})

console.log('Olá!')
