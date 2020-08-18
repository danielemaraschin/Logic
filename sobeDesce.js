var maximoDeColunas = 3;
var quantidadeMaximaDeLinhas = (maximoDeColunas * 2) - 2;
var inverte = maximoDeColunas -1;
var retorno = "";
var numeroEstrelinhas = 1;

for (var linha = 0; linha <= quantidadeMaximaDeLinhas; linha++) {
    for (var coluna = 0; coluna < numeroEstrelinhas; coluna++) {
        retorno = retorno + "*";
    }

    retorno = retorno + "\n";
    

    if( linha < inverte ){
        numeroEstrelinhas++;
    }else{
        numeroEstrelinhas--;
    }
}

console.log(retorno);



// for (var linha = 1; linha < quantidadeMaximaDeLinhas; linha++) {
//     for (var coluna = 1; coluna < maximoDeColunas ; coluna++) {
//         if (numeroColunas >= numeroEstrelinhas) {
//             retorno = retorno + "*";
//         } else {
//             retorno = retorno + " ";

//         }
//     }
//     if( linha < maximoDeColunas ){
//         numeroEstrelinhas++;
//     }else{
//         numeroEstrelinhas--
//     }
//     retorno = retorno + "\n";
//     console.log(retorno);
// }