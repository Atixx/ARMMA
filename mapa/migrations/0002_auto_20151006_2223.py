# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapa', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cause',
            name='CauseNumber',
        ),
        migrations.AddField(
            model_name='cause',
            name='CauseEnd',
            field=models.TextField(null=True, db_column='CauseEnd', blank=True),
        ),
        migrations.AddField(
            model_name='cause',
            name='CauseStart',
            field=models.TextField(null=True, db_column='CauseStart', blank=True),
        ),
    ]
