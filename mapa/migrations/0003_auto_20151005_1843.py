# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapa', '0002_auto_20151005_1837'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='countrycode',
            name='id',
        ),
        migrations.AlterField(
            model_name='countrycode',
            name='country',
            field=models.IntegerField(serialize=False, primary_key=True),
        ),
    ]
