# Generated by Django 5.0.3 on 2024-03-21 21:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='frameworks',
            name='LanguageId',
        ),
        migrations.CreateModel(
            name='LanguagesFrameworks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frameworks', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio_api.frameworks')),
                ('languages', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portfolio_api.languages')),
            ],
        ),
        migrations.AddField(
            model_name='frameworks',
            name='LanguageId',
            field=models.ManyToManyField(through='portfolio_api.LanguagesFrameworks', to='portfolio_api.languages'),
        ),
    ]
