const meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const diaSemana=['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

//--------------------------------------------------------------------------
//Esta função vai mostrar a data no topo, no formato solicitado
function mostra_topo() {
 let data_hora = new Date();
 let dia_da_semana=data_hora.getDay();
 let dia_do_mes=data_hora.getDate();
 let mes=data_hora.getMonth();
 let ano=data_hora.getFullYear();
 
 let mensagem=diaSemana[dia_da_semana] +  ", " + dia_do_mes + " de " + meses[mes] + " de " + ano ;
 document.write("<h1>" + mensagem + "</h1>");
}


//--------------------------------------------------------------------------
//Esta função vai mostrar a mensagem, no formato solicitado
function mostra_alert() {
 let data_hora = new Date();
 let dia_da_semana=data_hora.getDay();
 
 if (dia_da_semana == 0 || dia_da_semana == 6)
	 alert("É fim de semana !!!");

}
