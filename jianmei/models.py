from distutils.command import upload

from django.db import models

# Create your models here.
from django.utils import timezone


class Designer(models.Model):
    class Meta:
        verbose_name = '设计师'
        verbose_name_plural = '设计师'

    name = models.CharField('姓名', max_length=10)
    title = models.CharField('职称', max_length=10)
    case_count = models.IntegerField('案例作品数量')
    exp = models.IntegerField('从业年份')
    portrait = models.ImageField('照片', upload_to='designer')
    desc = models.CharField('描述', max_length=500, blank=True)
    show_on_index = models.BooleanField('是否在首页展示', default=False)

    def __str__(self):
        return self.name


class HouseProject(models.Model):
    class Meta:
        verbose_name = '楼盘信息'
        verbose_name_plural = '楼盘信息'

    name = models.CharField('楼盘名称', max_length=50)
    image = models.ImageField('楼盘图片', null=True, upload_to='house_project')
    desc = models.CharField('楼盘描述', max_length=2000)
    contract_count = models.IntegerField('签约户数', default=0)
    finished_count = models.IntegerField('施工户数', default=0)
    designers = models.ManyToManyField(Designer, verbose_name='所属设计师', blank=True)

    def __str__(self):
        return self.name


class HouseType(models.Model):
    class Meta:
        verbose_name = '户型'
        verbose_name_plural = '户型'

    project = models.ForeignKey(HouseProject, verbose_name='所属楼盘', on_delete=models.CASCADE)
    type = models.CharField('楼盘户型', max_length=30)
    area = models.IntegerField('面积')

    def __str__(self):
        return '%s %s' % (self.project.name, self.area)


class Case(models.Model):
    class Meta:
        verbose_name = '楼盘案例'
        verbose_name_plural = '楼盘案例'

    name = models.CharField('案例名称', max_length=20)
    house_type = models.ForeignKey(HouseType, verbose_name='户型', on_delete=models.CASCADE)
    style = models.CharField('装修风格', max_length=20, default='')
    show_index = models.IntegerField('首页显示顺序', null=True)

    def __str__(self):
        return self.name


class CaseImage(models.Model):
    class Meta:
        verbose_name = '案例图片'
        verbose_name_plural = '案例图片'

    case = models.ForeignKey(Case, verbose_name='所属案例', on_delete=models.CASCADE)
    image = models.ImageField('案例图片', null=True, upload_to='case_image')
    is_show_on_index = models.BooleanField('是否在首页展示（仅一张图片）', default=False)


# 户型外键
class HouseTypeImage(models.Model):
    class Meta:
        verbose_name = '户型图'
        verbose_name_plural = '户型图'

    house_type = models.ForeignKey(HouseType, verbose_name='所属户型', on_delete=models.CASCADE)
    image = models.ImageField('户型图', null=True, upload_to='house_type_image')


class Article(models.Model):
    class Meta:
        verbose_name = '装修攻略'
        verbose_name_plural = '装修攻略'

    title = models.CharField('标题', max_length=50)
    publish_date = models.DateTimeField('发布时间', default=timezone.now)
    content = models.TextField('正文', blank=True)
    click_count = models.IntegerField('点击次数', editable=False, default=0)
    image = models.ImageField('正文图片', null=True)
    type = models.CharField('类别', default='装修百科', max_length=50)

    def __str__(self):
        return self.title


class Appointment(models.Model):
    class Meta:
        verbose_name = '预约'
        verbose_name_plural = '预约'

    name = models.CharField('姓名', max_length=20, default='匿名')
    mobile_phone = models.CharField('联系电话', max_length=12)
    area = models.IntegerField('面积', default=0)
    district = models.CharField('地区', max_length=20)
    replied = models.BooleanField('是否回复', default=False)
    succeed = models.BooleanField('是否成单', default=False)

    def __str__(self):
        reply_str = '否'
        if self.replied:
            reply_str = '是'
        return '%s  联系电话：%s 是否回复：%s' % (self.name, self.mobile_phone, reply_str)
