from django.db import models


# Create your models here.
class Designer(models.Model):
    class Meta:
        verbose_name = '设计师'

    name = models.CharField('姓名', max_length=10)
    title = models.CharField('职称', max_length=10)
    case_count = models.IntegerField('案例作品数量')
    exp = models.IntegerField('从业年份')
    portrait = models.ImageField('照片')


class HouseProject(models.Model):
    class Meta:
        verbose_name = '楼盘信息'

    name = models.CharField('楼盘名称', max_length=50)
    desc = models.CharField('楼盘描述', max_length=2000)
    consult_count = models.IntegerField('咨询户数', default=0)
    contract_count = models.IntegerField('签约户数', default=0)
    started_count = models.IntegerField('开工户数', default=0)
    finished_count = models.IntegerField('竣工户数', default=0)
    designers = models.ManyToManyField(Designer, verbose_name='所属设计师')


class HouseType(models.Model):
    class Meta:
        verbose_name = '户型'

    project = models.ForeignKey(HouseProject, verbose_name='所属楼盘', on_delete=models.CASCADE)
    type = models.CharField('楼盘户型', max_length=30)
    area = models.IntegerField('面积')
    style = models.CharField('风格', max_length=20)

    def __str__(self):
        return '%s %s' % (self.project.name, self.area)


class Case(models.Model):
    class Meta:
        verbose_name = '楼盘案例'

    name = models.CharField('案例名称', max_length=20)
    house_type = models.ForeignKey(HouseType, verbose_name='户型', on_delete=models.CASCADE)


class CaseImage(models.Model):
    class Meta:
        verbose_name = '案例图片'

    case = models.ForeignKey(Case, verbose_name='所属案例', on_delete=models.CASCADE)
    image = models.ImageField
