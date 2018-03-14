$(document).ready(function(){

    function hide(){
        $("p").hide()
    }

    function show(){
        $("p").show()
    }

    let click = 0
    $("#click").click(function(){       
        if(click==0){
            hide()
            click = 1
        }else{
            show()
            click = 0
        }
    })
})