import promptSync from "prompt-sync"
// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.
let prompt = promptSync()
export function exercicio3(){
let numeroEscolhido: number = parseInt(prompt(`Digite um numero: `))

for(let n: number = 0; n <= 10; n +=1){
    console.log(`${n} X ${numeroEscolhido} ${n*numeroEscolhido}` )
}
}