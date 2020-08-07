var retorno = "";
var diminuicao = 3;

for (var linha = 1; linha <= 3 ;linha++){
    for (var coluna = 1; coluna <= diminuicao ; coluna++){
       retorno = retorno + "*" ;
    }
    retorno = retorno + "\n";
    diminuicao++;
}
 console.log(retorno);
