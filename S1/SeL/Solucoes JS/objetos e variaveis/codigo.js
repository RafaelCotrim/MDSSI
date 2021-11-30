//Esta função determina qual das duas pessoas é a mais velha
function devolve_nome_do_mais_velho(pessoa_a,pessoa_b){ 
	let a=pessoa_a.ano_nascimento*9999 + pessoa_a.mes_nascimento*99 + pessoa_a.dia_nascimento;
	let b=pessoa_b.ano_nascimento*9999 + pessoa_b.mes_nascimento*99 + pessoa_b.dia_nascimento;

	if (a > b)
		return pessoa_b.nome;
	else if (a < b)
		return pessoa_a.nome;
	else
		return "O " + pessoa_a.nome + " e o " + pessoa_b.nome + " têm a mesma idade";
}

//Esta é a função principal que vai ser executada assim que o documento é carregado
function executa_tarefas() {
	pessoa1= new Object;
	pessoa1.nome="Ringo Starr";
	pessoa1.dia_nascimento=7;
	pessoa1.mes_nascimento=7;
	pessoa1.ano_nascimento=1940;

	pessoa2= new Object;
	pessoa2.nome="Paul McCartney";
	pessoa2.dia_nascimento=18;
	pessoa2.mes_nascimento=6;
	pessoa2.ano_nascimento=1942;

	pessoa3= new Object;
	pessoa3.nome="Bob Dylan";
	pessoa3.dia_nascimento=24;
	pessoa3.mes_nascimento=5;
	pessoa3.ano_nascimento=1941;
	
	document.write("<h1>O mais velho é: " + devolve_nome_do_mais_velho(pessoa1,pessoa2) + "</h1>");

}
