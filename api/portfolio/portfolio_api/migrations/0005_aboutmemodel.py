# Generated by Django 5.0.3 on 2024-04-20 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_api', '0004_alter_frameworks_options_alter_languages_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutMeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_pl', models.TextField()),
                ('about_en', models.TextField()),
            ],
            options={
                'verbose_name_plural': 'about',
            },
        ),
    ]
