// var retorno = "";
// var numeroColunas = 1;
// var maximoDeColunas = 5;
// var numeroEstrelinhas = maximoDeColunas - 1;
// var quantidadeMaximaDeLinhas = maximoDeColunas * 2;

var retorno = "";
var numeroEstrelinhas = 1;

for (var linha = 0; linha < 11; linha++) {
    for (var coluna = 0; coluna < numeroEstrelinhas; coluna++) {
        retorno = retorno + "*";
    }

    retorno = retorno + "\n";
    

    if( linha < 5 ){
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