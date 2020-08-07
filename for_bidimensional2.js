var retorno = "";
var aumenta = 2;

for (var linha = 1; linha <= 10 ;linha++){
    for (var coluna = 1; coluna <= aumenta ; coluna++){
       retorno = retorno + "*" ;
    }
    retorno = retorno + "\n";
    aumenta++;
}
 console.log(retorno);
