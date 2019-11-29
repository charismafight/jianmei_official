$(document).ready(function(){
$(".list").hide();
$(".a").hide();
$(".img,.a").click(function(){
        var zindexNumber = 10;
       $(".list").css('z-index', zindexNumber)
        if($(".img").find('img').attr('src')=='/Public/mobile/images/team/1.png'){  
            $(".img").find('img').attr('src','/Public/mobile/images/shili/1.png');  
        }else{  
            $(".img").find('img').attr('src','/Public/mobile/images/team/1.png');  
        } 
	$(".list").toggle();
	$(".a").toggle();
})
})
