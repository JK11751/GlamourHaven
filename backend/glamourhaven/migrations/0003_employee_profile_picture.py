# Generated by Django 4.0.2 on 2022-02-05 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glamourhaven', '0002_remove_appointment_service_appointment_services'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='profile_picture',
            field=models.ImageField(default='images/profile/profile.jpg', null=True, upload_to='images/profile'),
        ),
    ]
