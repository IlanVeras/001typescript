const arr = [1,2,3]
// console.log(arr instanceof Array)

function isString(value: unknown): value is string{
    return typeof value === 'string'
}

interface Produto {
    nome: string;
    preco: number
}

function isProduto(value:unknown) : value is Produto{
    if(
        value &&
        typeof value === 'object' &&
        "nome" in value &&
        "preco" in value
    ){
        return true
    }
    return false
}

function handleProduto(data:unknown){
    if(isProduto(data)){
        console.log(data.nome)
    }
}

const p: Produto = {
    nome: 'teste',
    preco: 1
}

handleProduto(p)