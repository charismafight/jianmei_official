# Generated by Django 2.1.7 on 2019-05-05 14:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('jianmei', '0004_auto_20190429_2212'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='标题')),
                ('publish_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='发布时间')),
                ('content', models.TextField(blank=True, verbose_name='正文')),
                ('click_count', models.IntegerField(editable=False, verbose_name='点击次数')),
            ],
            options={
                'verbose_name': '装修攻略',
                'verbose_name_plural': '装修攻略',
            },
        ),
        migrations.AddField(
            model_name='designer',
            name='desc',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='描述'),
        ),
    ]