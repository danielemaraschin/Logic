var resultado = "";
var pulaLinha = "\n";

for (var linha = 1; linha <= 3; linha++) {
    for (var coluna = 1; coluna <= 10; coluna++) {
        resultado = resultado + "*";
    }
    resultado = resultado + pulaLinha;
}
console.log(resultado + pulaLinha);