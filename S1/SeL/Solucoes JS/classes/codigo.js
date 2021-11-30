function populatePage()
{
	aluno1= new Aluno("Paulo Maria Martins");
	aluno1.setNIF(12345678);
	aluno1.setDataNascimento(6,11,2000);

	aluno2= new Aluno("Carla Gomes Brito");
	aluno2.setNIF(111222333);
	aluno2.setDataNascimento(4,5,1973);

	aluno3= new Aluno("Jorge Mendes Futre");
	aluno3.setNIF(765123487);
	aluno3.setDataNascimento(23,2,1978);


	document.write("<p>Nome: " + aluno1.getNome() );
	document.write(" , NIF: " + aluno1.getNIF() );
	document.write(" , Idade: " + aluno1.getIdade() + " anos</p>");

	document.write("<p>Nome: " + aluno2.getNome() );
	document.write(" , NIF: " + aluno2.getNIF() );
	document.write(" , Idade: " + aluno2.getIdade() + " anos</p>");

	document.write("<p>Nome: " + aluno3.getNome() );
	document.write(" , NIF: " + aluno3.getNIF() );
	document.write(" , Idade: " + aluno3.getIdade() + " anos</p>");
		
}
