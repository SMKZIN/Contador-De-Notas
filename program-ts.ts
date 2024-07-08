// tela de inicio:
const TELAINICIO: string = "<--- ## School Grade Calculator ## --->\n\n1 - Nota\n\n2 - Aprovado ou reprovado\n\n3 - Sair\n\n<------------------------------->\n\n"
console.log(TELAINICIO )

// opções:

let readlineSync = require("readline-sync")
let retornoOp1: any = `<--- ## School Grade Calculator ## --->\n\n1-Valor da Prova 1 = 0\n\n2-Valor da Prova 2 = 0\n\n3-Valor da Prova 3 = 0\n\n<--------------------------------->\n      Insira o valor da nota:\n`
let retornoOp2: any = `<--- ## School Grade Calculator ## --->\n\n- Vamos fazer a média das notas\n das suas avaliações do semestre,\n insira a soma das três provas\n para obter a média semestral.\n\n<--------------------------------->\n   Insira o valor da nota total:\n`
const opcao: any = readlineSync.question("Escolha uma opcao:")


// condição da escolha:

   // opcao 1 - Soma das notas da prova:
    if(opcao == 1){
        console.log(`\n$sgc: Abrindo opção 1.... \n\n ${retornoOp1} `)

        const p1: number = parseInt(readlineSync.question("Nota prova 1 :\n"))
        const p2: number = parseInt(readlineSync.question("\nNota prova 2:\n"))
        const p3: number = parseInt(readlineSync.question("\nNota prova 3:\n"))
        let somaP1P2P3: number = p1 + p2 + p3
        const resultado1: any = `\n$sgc: Sua nota total é de ${somaP1P2P3} pontos.\n`
        console.log(resultado1)

    // opcao 2 - aprovado ou reprovado:
    }else if(opcao == 2){
        console.log(`\n$sgc: Abrindo opção 2....\n\n ${retornoOp2}`)

        const total: number = parseInt(readlineSync.question("\n\nInsira a nota total:"))
        let media:number = total / 2
        const resultado2: any =`\n$sgc: Sua média é de ${media} pontos.`
        console.log(resultado2)
        if(media >=60){
            console.log("\n$sgc: Você foi APROVADO!!")
        }else{
            console.log("\n$sgc: Você foi REPROVADO !!")
        }
    // opcao 3 - sair do app
    }else{
        console.log("\n$sgc: Saindo...") 
       
    }
        


    






 

