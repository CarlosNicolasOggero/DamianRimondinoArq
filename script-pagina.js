$(document).ready(function(){
    $(".ir-arriba").click(function(){
        $("body, html").animate({
            scrolTop:"0px"
        }, 500)
    })

    $(window).scroll(function() {
        if($(this).scrollTop()>0){
            $(".ir-arriba").slideDown(300)
        }else{
            $(".ir-arriba").slideUp(300)
        }
    })

    let elementos=document.querySelectorAll("img")
    for(let i=0;i<elementos.length;i++){
        elementos[i].addEventListener("mouseover", cambiar, false)
         elementos[i].addEventListener("mouseout", restaurar, false)
    }

    $("#boton-galeria").click(function(){
        $("#fotoscontenedor").css("display", "none")
        $("#fotoscontenedor2").css("display","flex")
    })

    $("#boton-galeria2").click(function () {
        $("#fotoscontenedor").css("display", "flex")
        $("#fotoscontenedor2").css("display", "none")
    })

    $("#boton2").click(function() {
        $("#mensaje_enviado").css("display", "flex")
    });
})


function cambiar(e){
    if(e.target==iconosocial1){
        $("#iconosocial1").attr("src", "fotoscontacto/facebook2.jpg")
    }else if(e.target==iconosocial2){
        $("#iconosocial2").attr("src", "fotoscontacto/instagram2.jpg")
    }else if(e.target==iconosocial3){
        $("#iconosocial3").attr("src", "fotoscontacto/pinterest2.jpg")
    }else if(e.target==iconosocial4){
        $("#iconosocial4").attr("src", "fotoscontacto/linkedin2.jpg")
    }
}

function restaurar(e){
    if(e.target==iconosocial1){
        $("#iconosocial1").attr("src", "fotoscontacto/facebook.jpg")
    }else if(e.target==iconosocial2){
        $("#iconosocial2").attr("src", "fotoscontacto/instagram.jpg")
    }else if(e.target==iconosocial3){
        $("#iconosocial3").attr("src", "fotoscontacto/pinterest.jpg")
    }else if(e.target==iconosocial4){
        $("#iconosocial4").attr("src", "fotoscontacto/linkedin.jpg")
    }
}
