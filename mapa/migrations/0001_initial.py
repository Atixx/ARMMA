# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cause',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('CauseNumber', models.TextField(db_column='CauseNumber')),
                ('CauseDescription', models.TextField(db_column='CauseDescription')),
            ],
            options={
                'db_table': 'cause',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='CountryCode',
            fields=[
                ('country', models.IntegerField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'country_code',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Mort',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('country', models.IntegerField(db_column='Country')),
                ('admin1', models.IntegerField(null=True, db_column='Admin1', blank=True)),
                ('subdiv', models.CharField(max_length=3, db_column='Subdiv', blank=True)),
                ('year', models.IntegerField(db_column='Year', blank=True)),
                ('list', models.CharField(max_length=3, db_column='List', blank=True)),
                ('cause', models.CharField(max_length=5, db_column='Cause', blank=True)),
                ('sex', models.IntegerField(null=True, db_column='Sex', blank=True)),
                ('frmat', models.IntegerField(null=True, db_column='Frmat', blank=True)),
                ('im_frmat', models.IntegerField(null=True, db_column='IM_Frmat', blank=True)),
                ('deaths1', models.IntegerField(null=True, db_column='Deaths1', blank=True)),
                ('deaths2', models.IntegerField(null=True, db_column='Deaths2', blank=True)),
                ('deaths3', models.IntegerField(null=True, db_column='Deaths3', blank=True)),
                ('deaths4', models.IntegerField(null=True, db_column='Deaths4', blank=True)),
                ('deaths5', models.IntegerField(null=True, db_column='Deaths5', blank=True)),
                ('deaths6', models.IntegerField(null=True, db_column='Deaths6', blank=True)),
                ('deaths7', models.IntegerField(null=True, db_column='Deaths7', blank=True)),
                ('deaths8', models.IntegerField(null=True, db_column='Deaths8', blank=True)),
                ('deaths9', models.IntegerField(null=True, db_column='Deaths9', blank=True)),
                ('deaths10', models.IntegerField(null=True, db_column='Deaths10', blank=True)),
                ('deaths11', models.IntegerField(null=True, db_column='Deaths11', blank=True)),
                ('deaths12', models.IntegerField(null=True, db_column='Deaths12', blank=True)),
                ('deaths13', models.IntegerField(null=True, db_column='Deaths13', blank=True)),
                ('deaths14', models.IntegerField(null=True, db_column='Deaths14', blank=True)),
                ('deaths15', models.IntegerField(null=True, db_column='Deaths15', blank=True)),
                ('deaths16', models.IntegerField(null=True, db_column='Deaths16', blank=True)),
                ('deaths17', models.IntegerField(null=True, db_column='Deaths17', blank=True)),
                ('deaths18', models.IntegerField(null=True, db_column='Deaths18', blank=True)),
                ('deaths19', models.IntegerField(null=True, db_column='Deaths19', blank=True)),
                ('deaths20', models.IntegerField(null=True, db_column='Deaths20', blank=True)),
                ('deaths21', models.IntegerField(null=True, db_column='Deaths21', blank=True)),
                ('deaths22', models.IntegerField(null=True, db_column='Deaths22', blank=True)),
                ('deaths23', models.IntegerField(null=True, db_column='Deaths23', blank=True)),
                ('deaths24', models.IntegerField(null=True, db_column='Deaths24', blank=True)),
                ('deaths25', models.IntegerField(null=True, db_column='Deaths25', blank=True)),
                ('deaths26', models.IntegerField(null=True, db_column='Deaths26', blank=True)),
                ('im_deaths1', models.IntegerField(null=True, db_column='IM_Deaths1', blank=True)),
                ('im_deaths2', models.IntegerField(null=True, db_column='IM_Deaths2', blank=True)),
                ('im_deaths3', models.IntegerField(null=True, db_column='IM_Deaths3', blank=True)),
                ('im_deaths4', models.IntegerField(null=True, db_column='IM_Deaths4', blank=True)),
            ],
            options={
                'db_table': 'mort',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Pop',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('country', models.IntegerField(db_column='Country')),
                ('admin1', models.IntegerField(null=True, db_column='Admin1', blank=True)),
                ('subdiv', models.CharField(max_length=3, db_column='Subdiv', blank=True)),
                ('year', models.TextField(db_column='Year', blank=True)),
                ('sex', models.IntegerField(null=True, db_column='Sex', blank=True)),
                ('frmat', models.IntegerField(null=True, db_column='Frmat', blank=True)),
                ('pop1', models.IntegerField(null=True, db_column='Pop1', blank=True)),
                ('pop2', models.IntegerField(null=True, db_column='Pop2', blank=True)),
                ('pop3', models.IntegerField(null=True, db_column='Pop3', blank=True)),
                ('pop4', models.IntegerField(null=True, db_column='Pop4', blank=True)),
                ('pop5', models.IntegerField(null=True, db_column='Pop5', blank=True)),
                ('pop6', models.IntegerField(null=True, db_column='Pop6', blank=True)),
                ('pop7', models.IntegerField(null=True, db_column='Pop7', blank=True)),
                ('pop8', models.IntegerField(null=True, db_column='Pop8', blank=True)),
                ('pop9', models.IntegerField(null=True, db_column='Pop9', blank=True)),
                ('pop10', models.IntegerField(null=True, db_column='Pop10', blank=True)),
                ('pop11', models.IntegerField(null=True, db_column='Pop11', blank=True)),
                ('pop12', models.IntegerField(null=True, db_column='Pop12', blank=True)),
                ('pop13', models.IntegerField(null=True, db_column='Pop13', blank=True)),
                ('pop14', models.IntegerField(null=True, db_column='Pop14', blank=True)),
                ('pop15', models.IntegerField(null=True, db_column='Pop15', blank=True)),
                ('pop16', models.IntegerField(null=True, db_column='Pop16', blank=True)),
                ('pop17', models.IntegerField(null=True, db_column='Pop17', blank=True)),
                ('pop18', models.IntegerField(null=True, db_column='Pop18', blank=True)),
                ('pop19', models.IntegerField(null=True, db_column='Pop19', blank=True)),
                ('pop20', models.IntegerField(null=True, db_column='Pop20', blank=True)),
                ('pop21', models.IntegerField(null=True, db_column='Pop21', blank=True)),
                ('pop22', models.IntegerField(null=True, db_column='Pop22', blank=True)),
                ('pop23', models.IntegerField(null=True, db_column='Pop23', blank=True)),
                ('pop24', models.IntegerField(null=True, db_column='Pop24', blank=True)),
                ('pop25', models.IntegerField(null=True, db_column='Pop25', blank=True)),
                ('pop26', models.IntegerField(null=True, db_column='Pop26', blank=True)),
                ('lb', models.IntegerField(null=True, db_column='Lb', blank=True)),
            ],
            options={
                'db_table': 'pop',
                'managed': True,
            },
        ),
    ]
