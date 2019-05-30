$('#footer-form').on('click', function () {
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
            }
        })
    }
})