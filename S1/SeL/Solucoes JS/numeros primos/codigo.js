//-----------------------------------------------------------------------
//Esta função vai verificar o resto da divisão do numero por todos os inteiros
//menores que esse número. Se existir um inteiro para o qual o resto da divisao
//for zero, isso significa que não é um número primo
function verificaSeEPrimo(numero)
{
  let limite=Math.sqrt(numero);
  for (let j=2; j <= limite; j++)
    if (numero%j == 0)
      return false;
  
  return true;
}


//-----------------------------------------------------------------------
//Esta função vai percorrer todos os números desde 2 até n e para cada um
//vai verificar se é um número primo ou não
function calculaPrimos(limite)
{
	for (let i=2;i<=limite;i++)
	{
  	if (verificaSeEPrimo(i))
    	document.write("<h3>" + i + "</h3>");
	}
}