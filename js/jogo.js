$(document).ready(function(){
        alert("v.1");
        var mina = 0;
        var total = 40;
        var sort = Math.floor(Math.random() * total - 1 );
        if(sort == 1){sort++;}
        //alert(sort);

        for(var n=1;n<total;n++){

            if(n == sort){
                 mina = 1;
            }else{
                mina = 0;
            }    

            //$("#qds").append("<div class='col-lg qd' id=qd"+n+" data-mina="+mina+" data-n="+n+">"+n+"</div>")
            // <i class="far fa-envelope"></i>
            $("#qds").append("<div class='col-sm qd' id=qd"+n+" data-mina="+mina+" data-n="+n+"><i class='far fa-envelope'></i></div>")
        }

        $(".qd").click(function(){
                var sel = $(this).attr('data-n');
                var mina = $(this).attr('data-mina');
                if(mina == 1){
                    $("#qd"+sel).html("").append("<img src='imagens/bomba.png' style='max-width:60px'>");
                }else{
                    $("#qd"+sel).html("").append("<i class='fas fa-heart'></i>");
                    //$("#qd"+sel).append("<i class='fas fa-heart'></i>");
                }
                //alert(sel+" - "+mina);
        })
    })