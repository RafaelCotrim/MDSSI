const distancia_minima=30;
const TRUE = 1;
const FALSE = 0;

//esta funcao calcula a distancia entre dois pontos e verifica se a distancia é curta ou não
function coordenadas_sao_proximas(x1,y1,x2,y2) {
	let distancia=Math.sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y1-y1) );

	if (distancia < distancia_minima)
		return TRUE;
     else
		return FALSE;
}

//esta função muda a posição do botão para longe da posição do cursor do rato
function mudaPosicaoBotao()
{
	let mouse_x = event.clientX;
	let mouse_y = event.clientY; 

    do {
		var new_button_x = Math.random()*800; //valor aleatório entre 0 e 800
		var new_button_y = Math.random()*600; //valor aleatório entre 0 e 600
	} while (coordenadas_sao_proximas(mouse_x,mouse_y,new_button_x,new_button_y));


	let d = document.getElementById("btn");

	d.style.left = new_button_x + "px";
	d.style.top = new_button_y + "px";
}
