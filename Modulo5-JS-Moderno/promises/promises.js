function testes(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const erro = false
            if(erro){
                reject('Erro...')
            }else{
                resolve('A promisse foi resolvida com sucesso!')
            }
        },2000)
    })
}

async function testes2(){
    await testes().then((res)=>{
        alert(res)
    })
    alert('Olá')
}

testes2()