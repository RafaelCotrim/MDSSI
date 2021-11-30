//esta função vai calcular a tabuada do número que for introduzido como parâmetro
function calculaTabuada(numero) {
	if (Number.isInteger(numero)) {
		for (let i=1;i<=10;i++)	{
			let resultado = i*numero;
			textResultado =i + " x " + numero + " = " + resultado;
			document.write("<h3>" + textResultado + "</h3>");
		}
	}
	else {
		document.write("<h3>Não foi introduzido um número inteiro</h3>");
	}
}