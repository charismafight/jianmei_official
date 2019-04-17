# Generated by Django 2.1.7 on 2019-04-17 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Case',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='案例名称')),
            ],
            options={
                'verbose_name': '楼盘案例',
            },
        ),
        migrations.CreateModel(
            name='CaseImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('case', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jianmei.Case', verbose_name='所属案例')),
            ],
            options={
                'verbose_name': '案例图片',
            },
        ),
        migrations.CreateModel(
            name='Designer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10, verbose_name='姓名')),
                ('title', models.CharField(max_length=10, verbose_name='职称')),
                ('case_count', models.IntegerField(verbose_name='案例作品数量')),
                ('exp', models.IntegerField(verbose_name='从业年份')),
                ('portrait', models.ImageField(upload_to='', verbose_name='照片')),
            ],
            options={
                'verbose_name': '设计师',
            },
        ),
        migrations.CreateModel(
            name='HouseProject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='楼盘名称')),
                ('image', models.ImageField(null=True, upload_to='', verbose_name='楼盘图片')),
                ('desc', models.CharField(max_length=2000, verbose_name='楼盘描述')),
                ('consult_count', models.IntegerField(default=0, verbose_name='咨询户数')),
                ('contract_count', models.IntegerField(default=0, verbose_name='签约户数')),
                ('started_count', models.IntegerField(default=0, verbose_name='开工户数')),
                ('finished_count', models.IntegerField(default=0, verbose_name='竣工户数')),
                ('designers', models.ManyToManyField(blank=True, null=True, to='jianmei.Designer', verbose_name='所属设计师')),
            ],
            options={
                'verbose_name': '楼盘信息',
                'verbose_name_plural': '楼盘信息',
            },
        ),
        migrations.CreateModel(
            name='HouseType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=30, verbose_name='楼盘户型')),
                ('area', models.IntegerField(verbose_name='面积')),
                ('style', models.CharField(max_length=20, verbose_name='风格')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jianmei.HouseProject', verbose_name='所属楼盘')),
            ],
            options={
                'verbose_name': '户型',
            },
        ),
        migrations.AddField(
            model_name='case',
            name='house_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jianmei.HouseType', verbose_name='户型'),
        ),
    ]
