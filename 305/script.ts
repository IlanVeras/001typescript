// function soma(a:number, b:number, c?:number): number{
//     if(c){
//         return a + b + c
//     }
//     return a + b
// }

// const soma = (a:number, b:number, c?:number) : number => {
//     if(c){
//         return a + b + c
//     }
//     return a + b
// }

// type CallBack = (event: MouseEvent) => void

// console.log(soma(1,2,9))

// function mudaFundo(color:string): void{
//     document.body.style.background = color
// }

// mudaFundo('black')

// function qualTipo(e:any){
//     if(typeof e === 'string'){
//         return 'string'
//     }
// }
// console.log(qualTipo('Texto'))
// console.log(qualTipo(1))

// function abortar(mensagem:string): never{
//     throw new Error(mensagem)
// }

// abortar('Um erro ocorreu')
// console.log('Tente novamente')

// function normalizar(valor:string[]): string
// function normalizar(valor: string): string
// function normalizar(valor: string | string[]):string | string[]{
//     if(typeof valor === 'object'){
//         for(let i=0, n=valor.length; i < n; i++){
//            valor[i] = valor[i].trim().toLowerCase()
//         }
//         return valor
//     }
//     return valor.trim().toLowerCase()
// }

// console.log(normalizar(' Produto '))
// console.log(normalizar([' ThE', 'EnD ', ' !']))

//overloading que determina a entrada do tipo number e a saída com retorno number
function arredonda(valor: number): number;
//overloading que determina a entrada do tipo string e a saída com retorno string
function arredonda(valor: string): string;
//função que recebe um valor que pode ser string ou number e retorna um valor que pode ser string ou number
function arredonda(valor: number | string): number | string {
  //se o tipo do valor repassado for number
  if (typeof valor === "number") {
    //arredondar para cima esse valor
    return Math.ceil(valor);
  }
  //se o tipo repassado for string
  //converter esse valor para number
  valor = Number(valor);
  //depois retornar esse valor arredondado para cima como string
  return String(Math.ceil(valor));
}

console.log(arredonda("7.89").length);
console.log(arredonda(2.3).toPrecision());
