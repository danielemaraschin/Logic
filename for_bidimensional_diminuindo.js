var retorno = "";
var aumenta = 1;

for (var linha = 1; linha <= 5 ;linha++){
    for (var coluna = 1; coluna <= aumenta ; coluna++){
       retorno = retorno + "*" ;
    }
    retorno = retorno + "\n";
    aumenta++;
}
 console.log(retorno);
