// tela de inicio:
const TELAINICIO: string = "<--- ## CONTADOR DE NOTAS ## --->\n\n1 - Nota\n\n2 - Aprovado ou reprovado\n\n3 - Sair\n\n<------------------------------->\n\n"
console.log(TELAINICIO )

// opções:

let readlineSync = require("readline-sync")
let retornoOp1: string = `<--- ## CONTADOR DE NOTAS ## --->\n\n1-Valor da Prova 1 = 0\n\n2-Valor da Prova 2 = 0\n\n<--------------------------------->\n      Insira o valor da nota:`

const opcao: any = readlineSync.question("Escolha uma opcao:")


// condição da escolha:
    if(opcao == 1){
        console.log(`\n-Contador:Abrindo opção 1.... \n\n ${retornoOp1} `)

    }else if(opcao == 2){
        console.log("\n-Contador:Abrindo opção 2....")

    }else{
        console.log("\n-Contador:Saindo...") 
       
    }
 // opcao 1 - Soma das notas da prova:       
const nota1: number = parseInt(  readlineSync.question("\n\nNota Prova 1:\n"))
const nota2: number = parseInt(readlineSync.question("Nota Prova 2:\n"))
let somaN1eN2:number = nota1 + nota2
const saidaNota: any  =`<--- ## NOTA TOTAL ## --->\n\n-Valor da Prova 1 = ${nota1} pontos\n\n-Valor da Prova 2 = ${nota2} pontos\n\n#Sua nota total é: ${somaN1eN2} pontos\n\n<------------------------>` 
console.log(saidaNota)

// opcao 2 - aprovado ou reprovado:



 

