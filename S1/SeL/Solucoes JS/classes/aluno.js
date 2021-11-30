class Aluno {
	constructor (nome) {
		this.nome = nome;
	}

    //----------------------------------------------------------- 
	getNome() {
		return this.nome;
	};

 
    //----------------------------------------------------------- 
	setNIF(nr_fiscal) {
		this.NIF=nr_fiscal;
	};

 
    //----------------------------------------------------------- 
	getNIF() {
		return this.NIF;
	};

	
    //----------------------------------------------------------- 
	setDataNascimento(dia,mes,ano) {
		this.dia_nascimento=dia;
		this.mes_nascimento=mes;
		this.ano_nascimento=ano;	
	};

	
    //----------------------------------------------------------- 
	getIdade() {
		let now = new Date();
		let anoAtual=now.getFullYear();
		
		let idade = anoAtual - this.ano_nascimento;
		
		//é necessário acrescentar 1 porque o método getMonth() devolve 0 para o mês de janeiro
		if (now.getMonth() + 1 < this.mes_nascimento)
			idade--;
		else if ( (now.getMonth() + 1 == this.mes_nascimento) && (now.getDate() < this.dia_nascimento) )
			idade--;
						
		return idade;
	};
};
