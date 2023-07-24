import promptSync from "prompt-sync";
import { exercicio1 } from "./exercicio1";
import { exercicio2 } from "./exercicio2";
import { exercicio3 } from "./exercicio3";
import { exercicio4 } from "./exercicio4";
import { exercicio5 } from "./exercicio5";
import { exercicio6 } from "./exercicio6";
let prompt = promptSync()
let resposta:string;
do {
    console.log("bem vindo ao menu de exercicios")
    resposta = prompt("digite um numero de um a seis, para escolher um exercicio, ou 'sair'para enterroper o programa")
    switch (resposta) {
        case "1":
            console.log("voce escolheu o exercio1")
            exercicio1()
            
            break;
            case "2":
            console.log("voce escolheu o exercio2")
            exercicio2()
            
            break;
            case "3":
            console.log("voce escolheu o exercio3")
            exercicio3()
            
            break;
            case "4":
            console.log("voce escolheu o exercio4")
            exercicio4()
            
            break;
            case "5":
            console.log("voce escolheu o exercio5")
            exercicio5()
            
            break;
            case "6":
            console.log("voce escolheu o exercio6")
            exercicio6()
            
            break;
           
            
            
            
            
            
    
        default:
            console.log("voce nao escolheu nenhum exercicio")
            break;
    }
    
} while (resposta != "sair");
