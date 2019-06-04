$(function () {
    $('#footer-form').on('click', submnit);

    $('.gonglve_liuyan').on('click', submnit);

    $('.index_float_baojia').on('click', submnit)

    $('.index_tanchu').on('click', submnit);

    $('#btnSubmit').on('click', submnit);

    $('#btnButtomSubmit').on('click', submnit);
})

function submnit() {
    var form = $(this).closest('form');
    var name = $.trim(form.find('input[name=name]').val());
    var area = form.find('input[name=area]').val();

    if (area != null && isNaN(area)) {
        alert('请填写正确的面积')
        return false;
    }

    if (validatemobile(form.find('input[name=phone]').val())) {
        $.post('/',
            form.serialize(),
            function (msg) {
                alert('提交成功,我们将尽快联系您,感谢您的信任^v^');
                $('.tanchu-close').click();
                //location.reload();
            })
    }
}