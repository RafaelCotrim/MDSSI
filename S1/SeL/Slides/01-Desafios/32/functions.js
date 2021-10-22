var months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Desembro"
]

days = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
]

function show_date() {

    var today = new Date();
    var month_name = months[today.getMonth()];
    var day_name = days[today.getDay() - 1];
    var day = today.getDate();
    var week_day = today.getDay();
    var year = today.getFullYear();

    var format = `${day_name}, ${day} de ${month_name} de ${year}`;
    document.write(format);

    if(week_day == 5 || week_day == 6){
        alert("Hoje é final de semana")
    }
}