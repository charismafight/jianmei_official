# Generated by Django 2.1.7 on 2019-05-18 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jianmei', '0008_article_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='姓名')),
                ('mobile_phone', models.CharField(max_length=12, verbose_name='联系电话')),
                ('area', models.IntegerField(default=0, verbose_name='面积')),
                ('district', models.CharField(max_length=20, verbose_name='地区')),
                ('reply', models.BooleanField(default=False, verbose_name='是否回复')),
                ('succeed', models.BooleanField(default=False, verbose_name='是否成单')),
            ],
            options={
                'verbose_name': '预约',
                'verbose_name_plural': '预约',
            },
        ),
    ]
