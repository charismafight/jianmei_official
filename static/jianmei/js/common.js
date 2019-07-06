//	tab 切换样式
function switchTab(ProTag, ProBox, ProID, ProNum) {
    var TmpProtag = ProTag + ProID;
    var TmpProbox = ProBox + ProID;

    for (i = 1; i <= ProNum; i++) {
        var TmpProtag2 = ProTag + i;
        var TmpProbox2 = ProBox + i;

        if (TmpProtag2 == TmpProtag) {
            document.getElementById(TmpProtag2).className = "current-tab";
        } else {
            document.getElementById(ProTag + i).className = "";
        }
        if (ProBox + i == TmpProbox) {
            document.getElementById(TmpProbox).style.display = "";
        } else {
            document.getElementById(ProBox + i).style.display = "none";
        }
    }
}

//	收藏样式
function addfavorite(obj, url, title) {
    !url ? url = location.href : null;
    !title ? title = document.title : null;

    try {
        window.external.addFavorite(url, title);
        return false;
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
            return false;
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
            if (location.href.toLowerCase().indexOf(obj.href.toLowerCase(), 0) >= 0) {
                return false;
            }
        }
    }
}

//	固定报价表单样式
$(function () {
    var l = true;
    var top = $("#hotmenu").offset().top;

    function doFix() {
        var scrolla = $(window).scrollTop();
        var dis = parseInt(top) - parseInt(scrolla);
        if (l && dis <= 0) {
            $("#hotmenu").addClass("fixed2");
            l = false;
        }
        if (!l && dis > 0) {
            $("#hotmenu").removeClass("fixed2");
            l = true;
        }
    }

    $(window).scroll(doFix);
})