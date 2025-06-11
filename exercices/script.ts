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

function tripleNumbers<T extends number>(lista: T[]) : number[]{
    const novaLista = []
    for(let i=0, n=lista.length; i < n; i++){
        let valorTriplicado = lista[i] * 3
        novaLista.push(valorTriplicado)
    }
    return novaLista
}

// console.log(tripleNumbers([1,2,3]))

function capilizeFirstLetter<T extends string>(lista: T[]) : string[]{
    const novaLista = lista.map(item => String(item).charAt(0).toUpperCase() + String(item).slice(1))
    return novaLista
}

// console.log(capilizeFirstLetter(['abelha','burro','caramujo']))

function allGreaterThan<T extends number>(lista: T[], ref:number): boolean{
    // let res: number = 0
    // for(let i:number=0, n:number=lista.length; i < n; i++){
    //     if(ref > lista[i]){
    //         res += 1
    //     }
    // }
    // if(res === 0){
    //     return true
    // }
    // return false
    return lista.every(item => item > ref)
}

// console.log(allGreaterThan([10, 20, 30], 5)) 
// console.log(allGreaterThan([10, 2, 30], 5)) 


function joinItems<T>(lista: T[]): string{
    return lista.join(',')
}

// console.log(joinItems(['a','b', 'c']))
// console.log(joinItems([1, 2, 3])  )

function removeItemThere<T>(lista: T[], valor: T): T[]{
    let novaLista = []
    for(let i:number=0,n:number=lista.length; i<n; i++){
        if(lista[i] !== valor){
            novaLista.push(lista[i])
        }
    }
    return novaLista
}

// console.log(removeItem([1, 2, 3, 2], 2))
// console.log(removeItem(["a", "b", "a"], "a"))



//return lista.every(item => item > ref)

////////////////////////////////////////////////

function filterGreaterThan<T extends number>(lista: T[], ref:number): T[]{
    return lista.filter(item => item > ref)
}

// console.log(filterGreaterThan([1, 5, 8, 2], 4))

function countLetters<T extends string>(lista:T[]):number{
    //juntar tudo
    let newString = lista.join('')
    //separar letra por letra e apagar espaços vazios
    let newLista = newString.split('').filter(item => item !== ' ')
    //retornar tamanho da nova lista
    return newLista.length
}

// console.log(countLetters(["oi", "tudo bem"]))


function replaceAll<T>(lista: T[],antigo: T,novo: T): T[]{
    let newArr: T[] = []
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(lista[i] !== antigo){
            newArr.push(lista[i])
        }else{
            newArr.push(novo)
        }
    }
    return newArr
}

// console.log(replaceAll(["a", "b", "a"], "a", "x"))

function sumIfGreater<T extends number>(lista: T[], ref: number): number{
    let count:number = 0
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(lista[i] > ref){
            count += lista[i]
        }
    }
    return count
}

// console.log(sumIfGreater([1, 10, 5, 3], 4))

function firstMatch<T>(lista: T[], ref: T): T | undefined {
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(lista[i] === ref){
            return lista[i]
        }
    }
    return
}

// console.log(firstMatch(["casa", "carro", "casa"], "casa"))
function cleanAndCapitalizeWords(lista: string[]): string[]
function cleanAndCapitalizeWords<T extends string>(lista: T[]): string[]{
    let novoArr = []
    //passar palavra por palavra 
    for(let i:number=0,n:number=lista.length; i < n; i++){
        //transformar palavra em array
        let arrPalavra = lista[i].split('')
        //limpar array de espaços vazios
        let arrPalavraLimpo = arrPalavra.filter((letra) => letra !== ' ')
        //transformar array em string
        let newString = arrPalavraLimpo.join('')
        //capitalizar primeira letra
        let n = newString.charAt(0).toUpperCase() + newString.slice(1)
        //adicionar string ao novoArr
        novoArr.push(n)
    }
    return novoArr
}

// console.log(cleanAndCapitalizeWords(["  banana", "maçã ", "  uva "]))

function sumDigitsInList(lista: number[]):number[]
function sumDigitsInList<T extends number>(lista: T[]): number[]{
    let newArr = []
    //passe por cada numero
    for(let i:number = 0, n:number=lista.length; i< n; i++){
        //transforme esses numeros em uma string
        let numberStr = String(lista[i])
        //transforme a string em um array e converta cada item para Number
        let numberArr = (numberStr.split('')).map(item => Number(item))
        //faça um reduce dessa string
        let numberSum = numberArr.reduce((accumulator,current) => (
            accumulator + current
        ),0)
        //adicione esse valor ao novo array
        newArr.push(numberSum)
    }
    return newArr
}

// console.log(sumDigitsInList([12, 305, 7]))

function findLongestString(lista: string[]):string
function findLongestString<T extends string>(lista: T[]): string{
    //variável que guarda a maior string
    let longest:string = '';
    //passe por todas as palavras
    for(let i:number=0, n:number=lista.length; i < n; i++){
        //se for a primeira vez que o for está sendo executado
        if(i === 0){
            //a string mais longa é a primeira do array
            longest = lista[0]
        }else{
            //mas se a palavra mais longa até agora tiver um tamanho menor do que a palvra do for atual
            if(longest.length < lista[i].length){
                //atualize a variável da palavra mais longa
                longest = lista[i]
            }
        }
    }
    return longest
}


// console.log(findLongestString(["uva", "banana", "melancia"]))

function averageGreaterThan(lista: number[], ref: number):boolean
function averageGreaterThan<T extends number>(lista: T[], ref: number): boolean{
    //valor que guarda a soma de todos os numeros do array
    let numberSum: number = lista.reduce((acc,cur) => (
        acc + cur
    ),0)
    //valor que guarda a média da soma de todos os itens da lista
    let media: number = numberSum / lista.length
    //se a media for maior que a referência
    if(media > ref){
        //retornar verdadeiro
        return true
    }
    //por padrão retorne false
    return false
}

// console.log(averageGreaterThan([10, 20, 30], 15))

function countWordsWithLetter(lista: string[], ref: string):number
function countWordsWithLetter<T extends string>(lista: T[], ref: string) : number{
    //setar contador
    let count: number = 0
    //passar por cada palavra
    for(let i:number=0,n:number=lista.length; i < n; i++){
        //se a palavra atual incluir o valor de referência
        if(lista[i].includes(ref)){
            //adicionar + 1 ao contador
            count += 1
        }
    }
    return count
}

// console.log(countWordsWithLetter(["maçã", "banana", "uva", "leite"], "a"))


// console.log(removeDuplicatedWords(["uva", "banana", "uva", "maçã", "banana"]) )


function organizeByLetter<T extends string>(lista: T[]){
    const resultado: any = {}

    for(let i:number=0, n:number=lista.length; i < n; i++){
        const inicial = lista[i][0]
        resultado[inicial] = lista[i]
    }

    return resultado
}


// console.log(organizeByLetter(["ana", "alice", "bruno", "carla"]))

function countLetters2<T extends string>(lista: T[]){
    const resultado: any = {}

    for(const letra of lista){
        resultado[letra] = (resultado[letra] | 0) + 1
    }
    return resultado
}

// console.log(countLetters2(["a", 'a', "e", "i", 'i', 'i', "o"]))


function removeDuplicatedWords<T extends string>(lista: T[]):T[]{
    let newList: T[] = []
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(!newList.includes(lista[i])){
            newList.push(lista[i])
        }
    }
    return newList
}



function groupByFirstLetter<T extends string>(lista: T[]): Record<string, string[]>{
    const resultado: any = {}

    for(let i:number=0,n:number=lista.length; i < n; i++){
        const inicial = lista[i][0].toLocaleLowerCase()
        if(!resultado[inicial]){
            resultado[inicial] = []
        }
        resultado[inicial].push(lista[i].replace(" ", ""))
    }

    return resultado
}

// console.log(groupByFirstLetter(["Uva", "uva", "abacate", "Ameixa", "banana"]))

function areAllNumbersEven<T extends number>(lista: T[]): boolean{
    let contador = 0
    lista.forEach(element => {
        if(element % 2 !== 0){
            contador += 1
        }
    });
    if(contador === 0){
        return true
    }
    return false
}

// console.log(areAllNumbersEven([2, 4, 6]))
// console.log(areAllNumbersEven([1, 2, 3]))

function multiplyMatching<T extends number>(lista: T[], ref: T): number[]{
    let newArr = []
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(lista[i] % ref === 0){
            newArr.push(lista[i] * 2)
        }else{
            newArr.push(lista[i])
        }
    }
    return newArr
}

// console.log(multiplyMatching([10, 12, 15], 5))
//: {word: string, vowels: number}
function getWordsWithVowelCount<T extends string>(lista: T[]): {word: string, vowels: number}[]{
    let newArr: any = []
    for(let i:number=0,n:number=lista.length;i < n; i++){
        let totalVowls = 0
        let wordArr = lista[i].toLocaleLowerCase().replace(" ", "").split('')
        for(let i:number=0,n:number=wordArr.length; i < n; i++){
            if(wordArr[i] === 'a' || wordArr[i] === 'e' || wordArr[i] === 'i' || wordArr[i] === 'o' || wordArr[i] === 'u'){
                totalVowls += 1
            }
        }
        newArr.push({word: lista[i], vowels:totalVowls})
    }

    return newArr
}


// console.log(getWordsWithVowelCount(["uva", "banana", "pêssego"]))

// function groupAndCountBy<T, K extends keyof>(lista:T[], key:K){
//     console.log(produtos[0][key])
// }

// const produtos = [
//   { nome: "Notebook", categoria: "Eletrônico" },
//   { nome: "Celular", categoria: "Eletrônico" },
//   { nome: "Bola", categoria: "Esporte" },
//   { nome: "Tênis", categoria: "Esporte" },
//   { nome: "Fone", categoria: "Eletrônico" },
// ];

// groupAndCountBy(produtos, "categoria");


// function filteredLetterRepeat<T extends string>(lista:T[]){
//     for(let i:number=0,n:number=lista.length;i<n;i++){
        
//     }
// }

function hasRepeatedLetters(word:string): boolean{
    let letters = new Set()
    let wordArr = word.split('')
    for(let i:number=0,n:number=wordArr.length; i < n; i++){
        if(!letters.has(wordArr[i])){
            letters.add(wordArr[i])
        }else{
            return true
        }
    }
    return false
}

// console.log(hasRepeatedLetters('banana'))
// console.log(hasRepeatedLetters('anjo'))


function filterRepeated(lista:string[]):string[]{
    let ansArr = []
    for(let i:number=0,n:number=lista.length; i < n; i++){
        if(hasRepeatedLetters(lista[i])){
            ansArr.push(lista[i])
        }
    }
    return ansArr
}

// console.log(filterRepeated(["uva", "banana", "melão", "abacate"]))

function sortWords(lista:string[]):string[]{
    return lista.sort()
}

// console.log(sortWords(["banana", "uva", "abacate"]))


function filteredLetterRepeat<T extends string>(lista:T[]): string[]{
    //unção que retorna se uma string tem ou não letras repetidas
    function doesItRepeatLetter(str:string):boolean{
        let ansArr = new Set()
        let wordArr = str.split('')
        for(let i:number=0,n:number=wordArr.length; i < n; i++){
            if(!ansArr.has(wordArr[i])){
                ansArr.add(wordArr[i])
            }else{
                return true
            }
        }
        return false
    }
    let ansArr = []
    for(let i:number=0,n:number=lista.length; i < n; i++){
        //se a palavra repetir letras sera adcionada no array de resposta
        if(doesItRepeatLetter(lista[i])){
            ansArr.push(lista[i])
        }
    }
    //retorna-se um array de strings com os elementos organizados alfabeticamente
    return ansArr.sort()
}

// console.log(filteredLetterRepeat(["banana", "uva", "melão", "abacate", "kiwi", "laranja"]))

function onlyAlphabeticOrderWords<T extends string>(lista:T[]): string[]{
    let result = []
    for(let i=0,n=lista.length; i < n; i++){
        let word = lista[i]
        let isOrdered = true
        for(let j=1; j < word.length; j++){
            if(word[j] < word[j - 1]){
                isOrdered = false
                break
            }
        }

        if(isOrdered){
            result.push(word)
        }
    }
    return result
}

// console.log(onlyAlphabeticOrderWords(["amor", "aabc", "carro", "xyz", "bac"]))

function sameStartEndLetterWords<T extends string>(list:T[]):string[]{
    let result: string[] = []
    for(let i:number=0,n:number=list.length; i < n; i++){
        let word = list[i].toLocaleLowerCase().split('')
        let firstLetter = word[0]
        let lastLetter = word[word.length -1]
        if(firstLetter === lastLetter){
            result.push(list[i])
        }
    }
    return result
}

// console.log(sameStartEndLetterWords(["arara", "abacaxi", "asa", "Bolo", "anA", "ovo"]))


function smallerBigger<T extends number>(list:T[]){
    let s:number = 0
    let b:number = 0
    for(let i=0,n=list.length; i < n; i++){
        if(i === 0){
            s = list[i]
            b = list[i]
        }if(list[i] > b){
            b = list[i]
        }if(list[i] < s){
            s = list[i]
        }
    }
    return `Maior: ${b}, Menor: ${s}`
}

console.log(smallerBigger([8, 8, 16, 8, 7, 3, 4, 9]))