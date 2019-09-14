function random(obj) {
    obj.eq(Math.floor(Math.random() * 10)).show().siblings().hide();
}

function randoms(obj) {
    if (Math.floor(Math.random() * 10) % 2 == 0) {
        obj.eq(1).show();
    }
    else {
        obj.eq(1).hide();
    }
}

$(function () {
    $(".headArea span").bind("mouseover", function (e) {
        $(".headArea").find("ul").show();
    });
    $(".headArea ul").bind("mouseleave", function (e) {
        $(".headArea").find("ul").hide();
    });

    $(".navList li").mouseenter(function () {
        var index = $(this).index();
        $(this).stop().children(".list_none").fadeIn();
        return false;
    });
    $(".navList li").mouseleave(function () {
        var index = $(this).index();
        $(this).children(".list_none").stop().fadeOut();
        return false;
    });

    $(".bigmenu").mouseenter(function () {
        $(".submenu").hide();
        var id = $(this).attr("data-id");
        $("#submenu" + id).fadeIn();
    });
    $(".submenu").mouseleave(function () {
        $(".submenu").hide();
    });
    $(".head").mouseenter(function () {
        $(".submenu").hide();
    });


    // 报价、预约
    $('.index_float_baojia').on('click', function () {
        var form = $(this).closest('form');
        var name = $.trim(form.find('input[name=name]').val());
        if ('' == name) {
            alert('请填写您的称呼');
            return false;
        }
        if (validatemobile(form.find('input[name=phone]').val())) {
            $.post('/index.php?s=/Zhuangxiu/receive', form.serialize(), function (msg) {
                if (msg.status) {
//                        $('.index_float_baojia_block').show();
                    alert('提交成功,我们将尽快联系您,感谢您的信任^v^');
                    $(".reset").click();
                }
            })
        }
    })

    $('.index_float_yuyue').on('click', function () {
        var form = $(this).closest('form');
        var name = $.trim(form.find('input[name=name]').val());
        if ('' == name) {
            alert('请填写您的称呼');
            return false;
        }
        if (validatemobile(form.find('input[name=phone]').val())) {
            $.post('/index.php?s=/Zhuangxiu/receive', form.serialize(), function (msg) {
                if (msg.status) {
//                        $('.index_float_yuyue_block').show();
                    alert('提交成功,我们将尽快联系您,感谢您的信任^v^');
                    $(".reset").click();
                }
            })
        }
    })

    // 随机生成报价数字
    var t1 = setInterval(function () {
        random($(".index-form-screen-ge img"));
    }, 200);
    var t2 = setInterval(function () {
        random($(".index-form-screen-shi img"));
    }, 200);
    var t3 = setInterval(function () {
        random($(".index-form-screen-bai img"));
    }, 200);
    var t4 = setInterval(function () {
        random($(".index-form-screen-qian img"));
    }, 200);
    var t5 = setInterval(function () {
        random($(".index-form-screen-wan img"));
    }, 200);
    var t6 = setInterval(function () {
        randoms($(".index-form-screen-shiwan img"));
    }, 200);
    $(".totalprice").change(function () {
        var num = $(".index-form-main-bj #get_price em").text();
        var nums = num.toString().split('');
        clearInterval(t1);
        clearInterval(t2);
        clearInterval(t3);
        clearInterval(t4);
        clearInterval(t5);
        clearInterval(t6);
        $(".index-form-bj-screen .index-form-screen-sz img").hide();
        for (var i = 0; i < nums.length; i++) {
            $(".index-form-bj-screen .index-form-screen-sz").eq(i).find("img").eq(nums[nums.length - 1 - i]).show().siblings().hide();
        }
    });

    $(".btn-function").click(function () {
        $(".index-main-yy-pop-vellse").fadeIn();
    });

    $(".index-yy-pop-close").click(function () {
        $(".index-main-yy-pop-vellse").fadeOut();
    });

    var cs = 1;
    $(".index-form-head li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".index-form-main>div").eq($(this).index()).show().siblings().hide();
        if (cs == 1) {
            jQuery(".index-form-slide").slide({
                mainCell: ".index-form-slide-ul",
                effect: "topLoop",
                autoPlay: true,
                vis: 1,
                interTime: 2000,
            });
            cs++;
        }
    });


    $(".index_case ul li").eq(1).addClass("center");
    $(".index_360 ul li").eq(1).addClass("center");

    //全景图-左
    try {
        var viewer = PhotoSphereViewer({
            container: $(".vr_img_right").eq(0).find("div").eq(0).attr("id"),
            panorama: '/773814c65bca4a119ad4797fd55e6757.jpg',
            autoload: true,
            allow_scroll_to_zoom: false,
            navbar: false,
            allow_user_interactions: false,
        });
        viewer.on('ready', function () {
            viewer1.stopAutorotate();
        })
        $(".vr_img_right").eq(0).hover(function () {
            viewer.startAutorotate();
        }, function () {
            viewer.stopAutorotate();
        })
        //全景图-右上
        var viewer1 = PhotoSphereViewer({
            container: $(".vr_img_right").eq(1).find("div").eq(0).attr("id"),
            panorama: '/11efcab3228f4a4faf8381d2b001b63e.jpg',
            autoload: true,
            navbar: false,
            allow_scroll_to_zoom: false,
            allow_user_interactions: false
        });
        viewer1.on('ready', function () {
            viewer1.stopAutorotate();
        })
        $(".vr_img_right").eq(1).hover(function () {
            viewer1.startAutorotate();
        }, function () {
            viewer1.stopAutorotate();
        })
        //全景图-右下
        var viewer2 = PhotoSphereViewer({
            container: $(".vr_img_right").eq(2).find("div").eq(0).attr("id"),
            panorama: '/236020bcac3a4a51823cdce528ada2db.jpg',
            autoload: true,
            navbar: false,
            allow_scroll_to_zoom: false,
            allow_user_interactions: false
        });
        viewer2.on('ready', function () {
            viewer2.stopAutorotate();
        })
        $(".vr_img_right").eq(2).hover(function () {
            viewer2.startAutorotate();
        }, function () {
            viewer2.stopAutorotate();
        })
    } catch (e) {
        $('#container-img-1').css({
            backgroundColor: 'rgba(15,150,8,0.5)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        })
        $('#container-img-2').css({
            backgroundColor: 'rgba(15,150,8,0.5)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        })
        $('#container-img-3').css({
            backgroundColor: 'rgba(15,150,8,0.5)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        })
    }

    function init_price() {
        var Tprice = {
            "price": 51000,
            "cailiao": 30090,
            "rengong": 13260,
            "sheji": 3570,
            "zhijian": 4080,
        };
        $(".get_price em").html(Tprice.price);
        $(".cl em").html(Tprice.cailiao);
        $(".rg em").html(Tprice.rengong);
        $(".sj em").html(Tprice.sheji);
        $(".zj em").html(Tprice.zhijian);

    }

    function change_price() {
        var num = Math.ceil(Math.random() * 20000);

        if (parseInt($(".get_price em").html()) > 160000) {
            init_price();
        }
        $(".get_price em").html(parseInt($(".get_price em").html()) + num);
        $(".cl em").html(parseInt($(".cl em").html()) + parseInt(num / 3));
        $(".rg em").html(parseInt($(".rg em").html()) + parseInt(num / 7));
        $(".sj em").html(parseInt($(".sj em").html()) + parseInt(num / 200));
        $(".zj em").html(parseInt($(".zj em").html()) + parseInt(num / 200));

    }

    init_price();
    var t = setInterval(change_price, 200);
    var regObj = new RegExp("[^0-9]", "g");
    var MonTime = 12;

    function Mon() {
        var Money = ($(".tanchu-jgright-poinput").val() / MonTime) + ($(".tanchu-jgright-poinput").val() * 0.0799 * (MonTime / 12) / MonTime);
        $(".tanchu-jgright-poshow span.jg.htm"
        ).html(Money.toFixed(2));
    }

    $(".tanchu-jgright-poinput").change(function () {
        Mon();
    })
    $(".tanchu-jgright-point-main p").click(function () {
        var index = $(this).index() + 1;
        MonTime = index * 12;
        $(".tanchu-jgright-point-main").removeClass("bg1").removeClass("bg2").removeClass("bg3").addClass("bg" + index);
        Mon();

    })
    $(".tanchu-jgright-poinput").keydown(function () {
        $(this).val($(this).val().replace(regObj, ""));
        Mon();


    })
    $(".tanchu-jgright-poinput").keyup(function () {
        $(this).val($(this).val().replace(regObj, ""));
        Mon();
    })
});

$('.index_tanchu').on('click', function () {
//        $('.tanchu-maincen').show();
//        $('.hidden-get-price').hide();
    var form = $(this).closest('form');
    var name = $.trim(form.find('input[name=name]').val());
    if ('' == name) {
        alert('请填写您的称呼');
        return false;
    }
    if (validatemobile(form.find('input[name=phone]').val())) {
        $.post('/index.php?s=/Zhuangxiu/receive', form.serialize(), function (msg) {
            if (msg.status) {
                alert('提交成功,我们将尽快联系您,感谢您的信任^v^');
                $('.tanchu-close').click();
            }
        })
    }
})