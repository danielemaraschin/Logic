var retorno = "";
var maximoDeColunas = 5;
var chegouNaMetadeDasLinhas = maximoDeColunas -1;
var quantidadeDeLinhas = maximoDeColunas * 2;

for (var linha = 1; linha < quantidadeDeLinhas; linha++) {
    for (var coluna = 1; coluna <= maximoDeColunas; coluna++) {
        retorno = retorno + "*";
    }
    retorno = retorno + "\n";


    if (linha > chegouNaMetadeDasLinhas) {
        maximoDeColunas++;
    } else {
        maximoDeColunas--;
    }

}
console.log(retorno);
