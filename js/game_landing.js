$(document).ready(function(){

    


    $(".buy>button").on({
        mouseenter: function(){
            $(".circle").animate({
                width: "100%",
                height:"100%",
                top:0,
                left:0,
            });
        },  
        mouseleave: function(){
            $(".circle").animate({
                top:"100%",
                left:"100%",
            }, 1000);
            $(".circle").animate({
                width: "0%",
                height:"0%",
            });
            $(".circle").animate({
                top:0,
                left:0,
            });
        }
    });


    $(".buy2>button").on({
        mouseenter: function(){
            $(".circle2").animate({
                width: "100%",
                height:"100%",
                top:0,
                left:0,
            });
        },  
        mouseleave: function(){
            $(".circle2").animate({
                top:"100%",
                left:"100%",
            }, 1000);
            $(".circle2").animate({
                width: "0%",
                height:"0%",
            });
            $(".circle2").animate({
                top:0,
                left:0,
            });
        }
    });


    });
