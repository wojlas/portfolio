# Generated by Django 5.0.3 on 2024-04-16 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='projects',
            options={'verbose_name_plural': 'Projects'},
        ),
        migrations.AddField(
            model_name='projects',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
