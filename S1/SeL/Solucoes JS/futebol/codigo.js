function mouseOverA()
{
	document.title="Viva o Porto !";
	document.bgColor="#8080FF";
	document.body.style.backgroundImage = "url('porto.jpg')";
}


function mouseOverB()
{
	document.title="Viva o Benfica !";
	document.bgColor="#FF8080";
	document.body.style.backgroundImage = "url('benfica.jpg')";
}

function mouseOverC()
{
	document.title="Viva o Sporting !";
	document.bgColor="#80FF80";
	document.body.style.backgroundImage = "url('sporting.jpg')";
}

function mostraNavegador() {
	let navegadorHeading=document.getElementById("navegador");
	navegadorHeading.innerHTML=navigator.appName;
}
