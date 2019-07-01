

// 头部浮动

$(window) .scroll(function (a) {
    if ($.browser.ie6) {
      $('.header_logo_box') .css('top', $(this) .scrollTop() + $(this) .height() - 200);
    }
    if ($(this) .scrollTop() > 132) {
      $(".header_logo_box").addClass("header_add_top");
	  $(".header_top_box").addClass("header_add_ma");
    } else {
      $(".header_logo_box").removeClass("header_add_top");
	  $(".header_top_box").removeClass("header_add_ma");
    }
  })





// 导航

$(document).ready(function(){

$('.nav_hoverbox,.nav_hover_box').hide();
     
$('.nav_hoverli').each(function(index){
     $(this).mouseover(function(){
          $('.nav_hover_box').show();
          $('.nav_hoverbox').hide().eq(index).show();
     })

     $(this).mouseout(function(){
        $('.nav_hover_box').hide();  
     })
})


$('.nav_hover_box').each(function(index){
     $(this).mouseover(function(){
          $('.nav_hover_box').show();
          
     })
      $(this).mouseout(function(){
        $('.nav_hover_box').hide();  
     })
    
})

})



// 切换


$(document).ready(function(){
	jQuery(".banner").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:true,effect:"leftLoop",interTime:4000});
	jQuery(".design .bd li").first().before( jQuery(".design .bd li").last() );
	jQuery(".design").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",autoPlay:false, vis:5, autoPage:true, trigger:"click",interTime:4000,});
	//jQuery(".design_fd").slide({ titCell:".hd ul", mainCell:".design_info ul", effect:"leftLoop",autoPlay:false,vis:5, autoPage:true, trigger:"click",interTime:4000,});
	jQuery(".village").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:true,effect:"fade",interTime:6000});
	jQuery(".designer").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:false,effect:"fade"});
	jQuery(".coop_logo").slide({mainCell:".bd ul",autoPlay:false,effect:"leftLoop",vis:5});
	jQuery(".links_box").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:false,effect:"fade",trigger:"click"});
	
	jQuery(".zxzs_jjfs").slide({titCell:"dt", targetCell:"dd",defaultIndex:1,effect:"slideDown",delayTime:300,returnDefault:true});
	
	jQuery(".vr_xq_tp .bd ul li").slide({mainCell:".nei_bd dl",autoPlay:false,effect:"leftLoop",prevCell:".btn_prev",nextCell:".btn_next"});
	jQuery(".vr_xq_tp").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:false,effect:"fade",trigger:"click"});
	
	jQuery(".design").slide({ titCell:".design .hd ul", mainCell:".design_info ul", effect:"leftLoop",autoPlay:false, vis:5, autoPage:true, trigger:"click",interTime:4000,});
	
	jQuery(".main_content").slide({mainCell:".hot_xq_qh_box",titCell:".hot_xq_tab ul li",autoPlay:false,effect:"fade",trigger:"click"});
	jQuery(".coop_screen dl").slide({titCell:"dt", targetCell:"dd",defaultIndex:0,effect:"slideDown",delayTime:0,returnDefault:false});
	jQuery(".coop_xq_l").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:false,effect:"fade",trigger:"click"});
	jQuery(".main_content").slide({mainCell:".coop_in_page ul",titCell:".main_tab a",autoPlay:false,effect:"fade",trigger:"click",titOnClassName:"act"});
	jQuery(".carousel_box").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});
	jQuery(".container_sj").slide({mainCell:".list-info",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});
	jQuery(".wyz_box01").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:true,effect:"fade",trigger:"click"});
	jQuery(".wyz_box05").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:true,effect:"fade",trigger:"click"});
	jQuery(".ahfw_box03").slide({mainCell:".bd ul",titCell:".hd ul li",autoPlay:true,effect:"fade",interTime:4000});
})	

 

// 右侧浮动



$(function () {
    
    $(".float01 .gotop").click(function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500); //返回顶部动画 数值越小时间越短
    });

  });

//通用详情页网友评论

var mar_top=parseInt($(".comment_box").css("margin-top"));
var pad_top=parseInt($(".comment_box").css("padding-top"));

$(".net_btn .reply").live('click',function(){

  $(this).parents("li").siblings("li").find(".comment_box").hide();
  $(".comment_box .form_input").val('');

  if($(this).parents("li").find('.comment_box').eq(0).is(":hidden")){

		$(this).parents("li").find('.comment_box').eq(0).show().css({"margin-top":mar_top,"pad_top":pad_top});
  }else{

		$(this).parents("li").find('.comment_box').eq(0).hide();
  }


});

if($('.pl_write > li').length<4){
$(".click_toview_more").hide();
	}else{
		 $('.pl_write > li:gt(2)').hide();
		 $(".click_toview_more").show();
		 $('.pl_write > li').eq(2).css("border-bottom","none");
		 $(".click_toview_more").click(function(){
			$(this).hide();
			$('.pl_write > li:gt(2)').show();
			$('.pl_write > li').eq(2).css("border-bottom","1px solid #ddd");
		 })

	}


//锚点滑动效果

$(function(){
	$(".main_tab a,.vr_bg_l,in_page_tit a").click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
			$('html,body').animate({scrollTop: targetOffset},800);
			return false;
			}
		}
	});
});

//展开筛选
$(document).ready(function(e) {
    $(".screen_box i").click(function(){
		$(".screen_box .span01").toggleClass('dis_inb');
		$(".screen_box .span02").toggleClass('dis_n');
		$(".screen_fl").toggleClass('height_auto');
		$(".screen_box ul li i em").toggleClass('em_bapos');
	});
});

$(document).ready(function(e) {
    $(".sjs_xq_pj dl button").click(function(){
		$(".sjs_xq_pj dl button .span01").toggleClass('dis_n');
		$(".sjs_xq_pj dl button .span02").toggleClass('dis_inb');
		$(".sjs_xq_pj ul").toggleClass('dis_n');
		$(".sjs_xq_pj dl button em").toggleClass('em_bapos2');
	});
});


//低版本浏览器跳转
var getIEVersion = function () {
        var version = 999999;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent);
            version = parseInt(RegExp.$1);
        } else if ("ActiveXObject" in window) {
            version = 11;
        }
        return version;
    };

    var getLangPath = function () {
        var lang = 'zh_cn';
        if (window.location.pathname.match(/\/(zh_cn)\//i)) {
            lang = RegExp.$1;
        }
        return lang;
    };

    if (getIEVersion() < 11) {
        window.location.href = 'update/' + getLangPath() + '.html';
    }


//弹出层效果

function showDiv(){
	document.getElementById('popDiv').style.display='block';
    document.getElementById('form_bg').style.display='block';
}

function closeDiv(){
    document.getElementById('popDiv').style.display='none';
	document.getElementById('form_bg').style.display='none';
}


//澳华服务
$(function(){
		$('.ahfw_banner .btn').click(function(){
			 $('body,html').animate({
	            scrollTop: 1000
	        }, 800);
		})
	});

//无忧表单
var flag=true;
	$('.bqknr').click(function(){
		var icon=$('.bqk').find('i');

		if(flag==true){
			 $('.waveWrapper').animate({bottom:"0"},1000);
			 
			 icon.removeClass('up');
			 icon.addClass('down');
			 flag=false;
		}else if(flag==false){
			 $('.waveWrapper').animate({bottom:"-146px"},1000);
			 icon.removeClass('down');
			 icon.addClass('up');
			 flag=true;
		}
		
		
	})

