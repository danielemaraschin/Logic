var retorno = "";
var maximoDeColunas = 1;
var chegouNaMetadeDasLinhas = maximoDeColunas -1;
var quantidadeDeLinhas = maximoDeColunas * 2;

for (var linha = 1; linha < quantidadeDeLinhas; linha++) {
    for (var coluna = 1; coluna <= maximoDeColunas; coluna++) {
        
        if(linha < chegouNaMetadeDasLinhas) {
            maximoDeColunas++;
        } else {
            maximoDeColunas--;
        }
        retorno = retorno + "*";
    }
    retorno = retorno + "\n";    
}
console.log(retorno);
