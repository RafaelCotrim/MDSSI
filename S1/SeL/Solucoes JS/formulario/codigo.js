const COR_OK="#80FF80";
const COR_BAD="red";

//----------------------------------------------------
function checkNome(inputBox)
{
	let numeroCarateres=inputBox.value.length;

	if (numeroCarateres>=10)
		inputBox.style.backgroundColor = COR_OK;
	else
		inputBox.style.backgroundColor = COR_BAD;
}

//----------------------------------------------------
function checkTelefone(inputBox)
{
	//remover caracteres não numéricos
	inputBox.value = inputBox.value.replace(/\D/g,'');

	let numeroCarateres=inputBox.value.length;

	if (numeroCarateres==9)
		inputBox.style.backgroundColor = COR_OK;
	else
		inputBox.style.backgroundColor = COR_BAD;
}


//----------------------------------------------------
function checkSenhas()
{
	let inputBoxSenha1 = document.getElementById("senha1");
	let inputBoxSenha2 = document.getElementById("senha2");
	let numeroCarateres= inputBoxSenha1.value.length;

	if (numeroCarateres>=8 && inputBoxSenha1.value == inputBoxSenha2.value) {
		inputBoxSenha1.style.backgroundColor = COR_OK;
		inputBoxSenha2.style.backgroundColor = COR_OK;
	}
	else {
		inputBoxSenha1.style.backgroundColor = COR_BAD;
		inputBoxSenha2.style.backgroundColor = COR_BAD;
	}
}
