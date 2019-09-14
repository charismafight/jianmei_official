/**
 * Created by Xiec on 2018/4/10.
 */
$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

    // var elem = document.getElementById("header");
    // if (elem != null) {
    //     var headroom = new Headroom(elem, {
    //         "tolerance": 5,
    //         "offset": 5,
    //         "classes": {
    //             "initial": "animated",
    //             "pinned": "slideInDown", //上滑
    //             "unpinned": "slideOutUp" //下滑
    //         }
    //     });
    //     headroom.init();
    // }



//
//     var fun = function (doc, win) {
//         var docEl = doc.documentElement,
//             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//             recalc = function () {
//                 var clientWidth = docEl.clientWidth;
//                 if (!clientWidth) return;
//
//                 //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
//                 //可以根据实际需要修改
//                 docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
//             };
//         if (!doc.addEventListener) return;
//         win.addEventListener(resizeEvt, recalc, false);
//         doc.addEventListener('DOMContentLoaded', recalc, false);
//     };
//     fun(document, window);
// //            headroom.destroy();

});

