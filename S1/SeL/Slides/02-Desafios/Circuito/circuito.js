$(document).ready(function(){

    if(is_top_closed() || is_bottom_closed()){
        $("#lampada").attr("src", "lampada_acesa.png")
    } else {
        $("#lampada").attr("src", "lampada_apagada.png")
    }

    $(".interruptor img").click(function() {
        if(is_open($(this).attr("src"))){
            $(this).attr("src", "interruptor_fechado.png")
        } else {
            $(this).attr("src", "interruptor_aberto.png")
        }
        
        if(is_top_closed() && is_bottom_closed()){
            $("#lampada").attr("src", "lampada_acesa.png")
        } else {
            $("#lampada").attr("src", "lampada_apagada.png")
        }

    });
});

function is_open(str){
    return str == "interruptor_aberto.png";
}

function is_top_closed(){
    return (!is_open($("#interruptor1").attr("src")) && !is_open($("#interruptor2").attr("src"))) || !is_open($("#interruptor3").attr("src"))
}

function is_bottom_closed(){
    return !is_open($("#interruptor4").attr("src")) || !is_open($("#interruptor5").attr("src"))
}