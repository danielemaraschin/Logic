var retorno = "";
var maximoDeColunas = 10;
var numeroEstrelinhas = maximoDeColunas - 1;
var quantidadeMaximaDeLinhas = maximoDeColunas * 2;

var retorno = "";
var numeroEstrelinhas = 1;

for (var linha = 0; linha <= quantidadeMaximaDeLinhas; linha++) {
    for (var coluna = 0; coluna < numeroEstrelinhas; coluna++) {
        retorno = retorno + "*";
    }

    retorno = retorno + "\n";
    

    if( linha < maximoDeColunas ){
        numeroEstrelinhas++;
    }else{
        numeroEstrelinhas--;
    }
}

console.log(retorno);
