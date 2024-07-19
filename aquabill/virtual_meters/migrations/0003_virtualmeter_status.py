# Generated by Django 5.0.7 on 2024-07-19 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("virtual_meters", "0002_alter_virtualmeter_customer"),
    ]

    operations = [
        migrations.AddField(
            model_name="virtualmeter",
            name="status",
            field=models.CharField(
                choices=[
                    ("active", "Active"),
                    ("inactive", "Inactive"),
                    ("suspended", "Suspended"),
                    ("deleted", "Deleted"),
                ],
                default="active",
                max_length=20,
            ),
        ),
    ]