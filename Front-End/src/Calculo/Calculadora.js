import Organizador from "../screens/Organizador"


export default function Calculadora ({Homem, Mulher, Crianca, Carne, Acompanhamento, Bebida, Outros, Locacao }){
    /*  CARNES (Valores por kg)
                BOVINA
                    Picanha             R$ 130,89
                    Contra Filé         R$ 49,99
                    Coxão Mole          R$ 36,98

                FRANGO 
                    Asa                 R$ 13,99
                    Coxa                R$ 10,99
                    Coração             R$ 70,99

                SUINA
                    Linguiça            R$ 14,99
                    Bisteca             R$ 16,98
                    Costela             R$ 26,98

        BEBIDAS (Valores por litro)
            Água                        R$ 13,32
            Refrigerante                R$ 06,50
            Suco                        R$ 04,69
            Cerveja                     R$ 19,40

        ACOMPANHAMENTOS (Valores por kg)
            Pão Francês                        R$ 15,99 
            Pão de Alho                 R$ 29,90 
            Queijo coalho               R$ 56,75
            Farofa                      R$ 22,25
            Arroz                       R$ 10,23

        OUTROS (Valores por kg)
            Carvão                      R$ 04,61
            Gelo                        R$ 02,60
            Sal Grosso                  R$ 04,05

    */

    const gramasH = (600/Carne.length)*Homem
    const gramasM = (400/Carne.length)*Mulher
    const gramasC = (250/Carne.length)*Crianca
    const kgCarne = (gramasH + gramasM + gramasC)/1000

    const kgCarvao = kgCarne * 1.3 // 1 kg de carne para 1,3 kg de carvão - em média
    const kgSalG = kgCarne * 0.018 // 1 kg de carne para 18 g de sal grosso - em média

    var tiposB = Bebida.length
    var bAlcolicas = 0

    if(Bebida.include("Cerveja", undefined)){ // Calculo das bebidas alcolicas
        tiposB -=1
        bAlcolicas +=1 
    }
    
    const Adulto  = Homem + Mulher

    const bPessoa =  ((600 / tiposB ) * ( Adulto + Crianca)) / 1000 // Refrigerante, suco, chá, água aromatizada e água: 600ml por pessoa.
    const bAdulto =  ((1000 / bAlcolicas) * Adulto) / 1000 // Cerveja: 1L por pessoa (cerca de 3 latas).

    const bTotal = bPessoa + bAdulto
    const kgGelo= bTotal * 1.3 // 1 kg gelo para cada litro de bebida

    const pessoa = Homem + Mulher + Crianca

    if(pessoa > 50){
        console.log("Erro: Limite de 50 pessoas")
    }

    const tFarofa = 0.1 * pessoa // 100 gramas de farofa por pessoa
    const tPaoAlho = 0.8 * pessoa // 80 gramas de pão de alho por pessoa
    const tPao = 0.5 * pessoa // 80 gramas de pão por pessoa
    const tArroz = 0.1 * pessoa // 100 gramas de arroz por pessoa
    const tQueijo = 0.043 * pessoa // 43 gramas de queijo coalho (1 espeto) por pessoa

    const valorTotal = 0 // Variavel que calcula o total da soma de todos os itens
    const valorTotalC = 0 // Variavel que calcula o total da carne
    const valorTotalB = 0 // Variavel que calcula o total das bebidas
    const valorTotalA = 0 // Variavel que calcula o total dos acompanhamentos
    const valorTotalO = 0 // Variavel que calcula o total dos outros
    const valorTotalL = 0 // Variavel que armazena o valor da locação

    // CARNES
    for(let i = 0; i <= Carne.length; i++){
        // BOVINA
        if("Picanha" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 130.89);
        }
        if("Contra Filé" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 49.99);
        }
        if("Coxão Mole" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 36.98);
        }

        // FRANGO
        if("Asa" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 13.99);
        }
        if("Coxa" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 10.99);
        }
        if("Coração" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 70.99);
        }

        // SUÍNA
        if("Linguiça" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 14.99);
        }
        if("Bisteca" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 16,98);
        }
        if("Costela" == Carne[i]){
            valorTotalC += (kgCarne.toFixed(2) * 26.98);
        }
    }

    // BEBIDAS
    for(let i = 0; i <= Bebida.length; i++){
        if("Água" == Bebida[i]){
            valorTotalB += (bPessoa.toFixed(2) * 13.32);
        }
        if("Refrigerante" == Bebida[i]){
            valorTotalB += (bPessoa.toFixed(2) * 6.5);
        }
        if("Suco" == Bebida[i]){
            valorTotalB += (bPessoa.toFixed(2) * 4.69);
        }
        if("Cerveja" == Bebida[i]){
            valorTotalB += (bAdulto.toFixed(2) * 19.4);
        }
    }

    // ACOMPANHAMENTOS
    for(let i = 0; i <= Acompanhamento.length; i++){
        if("Pão Francês" == Acompanhamento[i]){
            valorTotalA += (tPao.toFixed(2) * 15.99);
        }
        if("Pão de Alho" == Acompanhamento[i]){
            valorTotalA += (tPaoAlho.toFixed(2) * 29.9);
        }
        if("Queijo Coalho" == Acompanhamento[i]){
            valorTotalA += (tQueijo.toFixed(2) * 56.75);
        }
        if("Farofa" == Acompanhamento[i]){
            valorTotalA += (tFarofa.toFixed(2) * 22.25);
        }
        if("Arroz" == Acompanhamento[i]){
            valorTotalA += (tArroz.toFixed(2) * 10.23);
        }
    }

    // OUTROS
    for(let i = 0; i <= Outros.length; i++){
        if("Carvão" == Outros[i]){
            valorTotalO += (kgCarvao.toFixed(2) * 4.61);
        }
        if("Gelo" == Outros[i]){
            valorTotalO += (kgGelo.toFixed(2) * 2.6);
        }
        if("Sal Grosso" == Outros[i]){
            valorTotalO += (kgSalG.toFixed(2) * 4.05);
        }
    }
    valorTotalL = Locacao

    valorTotal= valorTotalC + valorTotalA + valorTotalB + valorTotalO + valorTotalL 

    const valorAdulto = valorTotal/Adulto // Variavel que calcula o rateio por pessoa

    return(
        valorAdulto, 
        valorTotal, 
        valorTotalC, 
        valorTotalA, 
        valorTotalB, 
        valorTotalO, 
        valorTotalL
    )
}
