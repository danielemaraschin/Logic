var retorno = "";
var diminuicaoDeColunas = 15;
var chegouNaMetadeDasLinhas = diminuicaoDeColunas -1;
var quantidadeDeLinhas = diminuicaoDeColunas * 2;

for (var linha = 1; linha < quantidadeDeLinhas; linha++) {
    for (var coluna = 1; coluna <= diminuicaoDeColunas; coluna++) {
        retorno = retorno + "*";
    }
    retorno = retorno + "\n";


    if (linha > chegouNaMetadeDasLinhas) {
        diminuicaoDeColunas++;
    } else {
        diminuicaoDeColunas--;
    }

}
console.log(retorno);
