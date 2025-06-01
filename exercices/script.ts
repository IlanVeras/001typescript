//ex 01
function getLast<T>(lista: T[]): T{
    //retorna o ultimo item utilizando o tamanho da lista subtraído de um
    return lista[lista.length -1]
}

const l1 =  ['Elphaba', 'Glinda', 'Emerald City', 'Oz', 'Munchkin', 'Elphaba', 'Glinda', 'Emerald City', 'Oz', 'Munchkin', 'Elphaba', 'Oz', 'Elphaba', 'Glinda', 'Munchkin', 'Munchkin']

// console.log(getLast(l1))

//ex 02
function toList<T>(item: T): T[]{
    //retorna um array com apenas um item
    return [item]
}

// console.log(toList('Dr. Dillamon'))

//ex03
//1)são declarados os tipos T, o 2)tipo é usado para declarar o que o parâmetro espera 3) e é esperado que a função retorn um boolean
function isEmpty<T>(lista: T[]): boolean{
    if(lista.length > 0){
        return false
    }
    return true
}

// console.log(isEmpty([]))

//ex04

//1) é declarado um tipo genérico, 2) o tipo genérico é utilizado para determinar o que os parâmetros das funções devem esperar sendo o primeiro parâmetro um array e o segundo um tipo genérico qualquer já que pode ser um number, string, booolean etc.. 3) é esperado que essa fuunção retorne um number
function countItem<T>(lista: T[], item: T):number{
    let count = 0;
    for(let i=0, n=lista.length; i < n; i++){
        if(lista[i] === item){
            count += 1
        }
    }
    return count
}

// console.log(countItem(l1,'Elphaba'))

//ex05
function firstTwo<T>(lista: T[]): T[]{
    if(lista.length > 1){
        return [lista[0],lista[1]]
    }
    return []
}

// console.log(firstTwo(l1))

//ex 06
function reverseList<T>(lista: T[]): T[]{
    if(lista.length > 1){
        return [...lista].reverse()
    }
    return []
}

// console.log(reverseList([1,2,3,4,5]))

//ex 07
function removeItem<T>(lista: T[], item: T): T[]{
    if(lista.length > 1){
        return lista.filter((e) => e != item)
    }
    return []
}

const frutas = ["Maçã", "Pêra", "Maçã", "Uva"]

// console.log(removeItem(frutas,'Maçã'))

//ex 08
function isEqual<T>(a: T, b: T): boolean{
    if(a === b){
        return true
    }
    return false
}

// ex 09
// function stringiFyAll<T>(lista: T[]): string[]{
//     if(lista.length > 1){
//         return lista.map((e) => e.toString())
//     }
// }

// console.log(stringiFyAll([1,2,3]))


// ex 10
function contantFunction<T>(valor: T): () => T{
    return () => valor
}

//ex11
// function findById<T extends {id: number}>(lista: T[], id:number): T | undefined{
//     let resposta;
//     for(let i=0, n=lista.length; i < n; i++){
//         if(lista[i].id == id){
//             resposta = lista[i]
//         }
//     }
//     return resposta
// }

const users = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }]

// console.log(findById(users, 2))

//ex 12
// function groupByProp<T, K extends keyof T>(lista: T[], prop: K): Record<string, T[]>{
//     return
// }

// const items = [
//   { tipo: 'fruta', nome: 'Maçã' },
//   { tipo: 'fruta', nome: 'Banana' },
//   { tipo: 'legume', nome: 'Cenoura' }
// ]

function findById<T extends {id: number}>(lista:T[], id:number):T | undefined{
    let r;
    console.log(lista)
    console.log(id)
    for(let i=0, n=lista.length; i < n; i++){
        if(lista[i].id === id){
            r = lista[i]
            return r
        }
    }
    return
}

// console.log(findById(users,1))

function mergeObjects<A, B>(a: A, b: B): A & B{
    return {...a, ...b}
}

const pessoa = { nome: "Carlos" }
const idade = { idade: 30 }

// console.log(mergeObjects(pessoa,idade))

function getUniqueItems<T>(lista: T[]): T[]{
    console.log(lista)
    let arrRes = new Set<T>()
    for(let i=0, n=lista.length; i < n; i++){
        if(!arrRes.has(lista[i])){
            arrRes.add(lista[i])
        }
    }
    return Array.from(arrRes)
}

// console.log(getUniqueItems([5, 7, 7, 5, 1, 9, 9, 9, 8]))

function pluck<T, K extends keyof T>(lista: T[],prop: K): T[K][]{
    let arrRes: T[K][] = [];
    lista.forEach(element => {
       arrRes.push(element[prop])
    });
    return arrRes
}


const pessoas = [{ nome: "João" }, { nome: "Maria" }]

// console.log(pluck(pessoas, 'nome'))


function getFirst<T>(lista: T[]): T{
    return lista[0]
}

// console.log(getFirst([10, 20, 30]))

function swap<T>(lista: T[], i:number, j:number): T[]{
    console.log(lista[0])
    let v1 = lista[i]
    let v2 = lista[j]
    lista[i] = v2
    lista[j] = v1
    return lista
}

// console.log(swap([1, 2, 3], 1, 2))

function repeatList<T>(lista: T[]): T[]{
    for(let i=0, n=lista.length; i < n; i++){
        lista.push(lista[i])
    }
    return lista
}

// console.log(repeatList(["x", "y"]))

function removeLast<T>(lista: T[]): T[]{
    lista.pop()
    return lista
}

// console.log(removeLast([1,2,3,4]))


function firstN<T>(lista: T[], n: number): T[]{
    let arrRes = []
    if(lista.length < n){
        n = lista.length
    }
    for(let i=0; i < n; i++){
        arrRes.push(lista[i])
    }
    return arrRes
}

// console.log(firstN(["a", "b", "c", "d"], 1))

function contains<T>(lista: T[], item: T): boolean{
    if(lista.includes(item)){
        return true
    }
    return false
}

// console.log(contains([1, 2, 3], 7))

function cloneList<T>(lista: T[]): T[]{
    return [...lista]
}

// console.log(cloneList([5, 6, 7]))

function doubleNumbers<T extends number>(lista: T[]): number[]{
    //defina o tipo
    // let arrRes: T[] = []
    // for(let i=0, n=lista.length; i < n; i++){
    //     arrRes.push((lista[i] * 2) as T)
    // }
    const arrRes = lista.map((item) => item * 2)
    return arrRes
}

// console.log(doubleNumbers([1,2,3]))


function concatStrings<T extends string>(lista: T[]) : string{
    let newStr = '';
    for(let i=0, n=lista.length; i < n; i++){
        newStr += `${lista[i]},`
    }
    return newStr
}

// console.log(concatStrings(["maçã", "banana", "uva"]))

//FAZER COM REDUCE
function sumList<T extends number>(lista: T[]): number{
    let total = 0
    for(let i=0, n=lista.length; i < n; i++){
        total += lista[i]
    }
    // const total = lista.reduce((resultado, valor) => {
    //     return (resultado + valor)
    // }, 0)
    return total
}


// console.log(sumList([10, 20, 30]))

function capitalizeList<T extends string>(lista: T[]): string[]{
    // let arrRes: T[] = []
    // for(let i=0, n=lista.length; i < n; i++){
    //     arrRes.push((lista[i].toUpperCase()) as T)
    // }
    const arrRes = lista.map((item) => item.toUpperCase())
    return arrRes
}

// console.log(capitalizeList(["oi", "tudo", "bem"]))

function countGreaterThan<T extends number>(lista: T[], ref: number): number{
    let total = 0
    for(let i=0, n=lista.length; i < n; i++){
        if(lista[i] > ref){
            total += 1
        }
    }
    return total
}

// console.log(countGreaterThan([5, 10, 15, 2, 14], 1))