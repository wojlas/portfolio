# Generated by Django 5.0.3 on 2024-04-16 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_alter_projects_options_projects_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projects',
            old_name='description',
            new_name='description_en',
        ),
        migrations.AddField(
            model_name='projects',
            name='description_pl',
            field=models.TextField(blank=True, null=True),
        ),
    ]