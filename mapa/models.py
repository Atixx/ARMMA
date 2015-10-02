# Create your models here.


from __future__ import unicode_literals

from django.db import models


class CountryCode(models.Model):
    country = models.IntegerField()
    name = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'country_code'


class Mort(models.Model):
    country = models.IntegerField(db_column='Country')  # Field name made lowercase.
    admin1 = models.IntegerField(db_column='Admin1', blank=True, null=True)  # Field name made lowercase.
    subdiv = models.CharField(db_column='Subdiv', max_length=3, blank=True)  # Field name made lowercase.
    year = models.TextField(db_column='Year', blank=True)  # Field name made lowercase. This field type is a guess.
    list = models.CharField(db_column='List', max_length=3, blank=True)  # Field name made lowercase.
    cause = models.CharField(db_column='Cause', max_length=5, blank=True)  # Field name made lowercase.
    sex = models.IntegerField(db_column='Sex', blank=True, null=True)  # Field name made lowercase.
    frmat = models.IntegerField(db_column='Frmat', blank=True, null=True)  # Field name made lowercase.
    im_frmat = models.IntegerField(db_column='IM_Frmat', blank=True, null=True)  # Field name made lowercase.
    deaths1 = models.IntegerField(db_column='Deaths1', blank=True, null=True)  # Field name made lowercase.
    deaths2 = models.IntegerField(db_column='Deaths2', blank=True, null=True)  # Field name made lowercase.
    deaths3 = models.IntegerField(db_column='Deaths3', blank=True, null=True)  # Field name made lowercase.
    deaths4 = models.IntegerField(db_column='Deaths4', blank=True, null=True)  # Field name made lowercase.
    deaths5 = models.IntegerField(db_column='Deaths5', blank=True, null=True)  # Field name made lowercase.
    deaths6 = models.IntegerField(db_column='Deaths6', blank=True, null=True)  # Field name made lowercase.
    deaths7 = models.IntegerField(db_column='Deaths7', blank=True, null=True)  # Field name made lowercase.
    deaths8 = models.IntegerField(db_column='Deaths8', blank=True, null=True)  # Field name made lowercase.
    deaths9 = models.IntegerField(db_column='Deaths9', blank=True, null=True)  # Field name made lowercase.
    deaths10 = models.IntegerField(db_column='Deaths10', blank=True, null=True)  # Field name made lowercase.
    deaths11 = models.IntegerField(db_column='Deaths11', blank=True, null=True)  # Field name made lowercase.
    deaths12 = models.IntegerField(db_column='Deaths12', blank=True, null=True)  # Field name made lowercase.
    deaths13 = models.IntegerField(db_column='Deaths13', blank=True, null=True)  # Field name made lowercase.
    deaths14 = models.IntegerField(db_column='Deaths14', blank=True, null=True)  # Field name made lowercase.
    deaths15 = models.IntegerField(db_column='Deaths15', blank=True, null=True)  # Field name made lowercase.
    deaths16 = models.IntegerField(db_column='Deaths16', blank=True, null=True)  # Field name made lowercase.
    deaths17 = models.IntegerField(db_column='Deaths17', blank=True, null=True)  # Field name made lowercase.
    deaths18 = models.IntegerField(db_column='Deaths18', blank=True, null=True)  # Field name made lowercase.
    deaths19 = models.IntegerField(db_column='Deaths19', blank=True, null=True)  # Field name made lowercase.
    deaths20 = models.IntegerField(db_column='Deaths20', blank=True, null=True)  # Field name made lowercase.
    deaths21 = models.IntegerField(db_column='Deaths21', blank=True, null=True)  # Field name made lowercase.
    deaths22 = models.IntegerField(db_column='Deaths22', blank=True, null=True)  # Field name made lowercase.
    deaths23 = models.IntegerField(db_column='Deaths23', blank=True, null=True)  # Field name made lowercase.
    deaths24 = models.IntegerField(db_column='Deaths24', blank=True, null=True)  # Field name made lowercase.
    deaths25 = models.IntegerField(db_column='Deaths25', blank=True, null=True)  # Field name made lowercase.
    deaths26 = models.IntegerField(db_column='Deaths26', blank=True, null=True)  # Field name made lowercase.
    im_deaths1 = models.IntegerField(db_column='IM_Deaths1', blank=True, null=True)  # Field name made lowercase.
    im_deaths2 = models.IntegerField(db_column='IM_Deaths2', blank=True, null=True)  # Field name made lowercase.
    im_deaths3 = models.IntegerField(db_column='IM_Deaths3', blank=True, null=True)  # Field name made lowercase.
    im_deaths4 = models.IntegerField(db_column='IM_Deaths4', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'mort'


class Pop(models.Model):
    country = models.IntegerField(db_column='Country')  # Field name made lowercase.
    admin1 = models.IntegerField(db_column='Admin1', blank=True, null=True)  # Field name made lowercase.
    subdiv = models.CharField(db_column='Subdiv', max_length=3, blank=True)  # Field name made lowercase.
    year = models.TextField(db_column='Year', blank=True)  # Field name made lowercase. This field type is a guess.
    sex = models.IntegerField(db_column='Sex', blank=True, null=True)  # Field name made lowercase.
    frmat = models.IntegerField(db_column='Frmat', blank=True, null=True)  # Field name made lowercase.
    pop1 = models.IntegerField(db_column='Pop1', blank=True, null=True)  # Field name made lowercase.
    pop2 = models.IntegerField(db_column='Pop2', blank=True, null=True)  # Field name made lowercase.
    pop3 = models.IntegerField(db_column='Pop3', blank=True, null=True)  # Field name made lowercase.
    pop4 = models.IntegerField(db_column='Pop4', blank=True, null=True)  # Field name made lowercase.
    pop5 = models.IntegerField(db_column='Pop5', blank=True, null=True)  # Field name made lowercase.
    pop6 = models.IntegerField(db_column='Pop6', blank=True, null=True)  # Field name made lowercase.
    pop7 = models.IntegerField(db_column='Pop7', blank=True, null=True)  # Field name made lowercase.
    pop8 = models.IntegerField(db_column='Pop8', blank=True, null=True)  # Field name made lowercase.
    pop9 = models.IntegerField(db_column='Pop9', blank=True, null=True)  # Field name made lowercase.
    pop10 = models.IntegerField(db_column='Pop10', blank=True, null=True)  # Field name made lowercase.
    pop11 = models.IntegerField(db_column='Pop11', blank=True, null=True)  # Field name made lowercase.
    pop12 = models.IntegerField(db_column='Pop12', blank=True, null=True)  # Field name made lowercase.
    pop13 = models.IntegerField(db_column='Pop13', blank=True, null=True)  # Field name made lowercase.
    pop14 = models.IntegerField(db_column='Pop14', blank=True, null=True)  # Field name made lowercase.
    pop15 = models.IntegerField(db_column='Pop15', blank=True, null=True)  # Field name made lowercase.
    pop16 = models.IntegerField(db_column='Pop16', blank=True, null=True)  # Field name made lowercase.
    pop17 = models.IntegerField(db_column='Pop17', blank=True, null=True)  # Field name made lowercase.
    pop18 = models.IntegerField(db_column='Pop18', blank=True, null=True)  # Field name made lowercase.
    pop19 = models.IntegerField(db_column='Pop19', blank=True, null=True)  # Field name made lowercase.
    pop20 = models.IntegerField(db_column='Pop20', blank=True, null=True)  # Field name made lowercase.
    pop21 = models.IntegerField(db_column='Pop21', blank=True, null=True)  # Field name made lowercase.
    pop22 = models.IntegerField(db_column='Pop22', blank=True, null=True)  # Field name made lowercase.
    pop23 = models.IntegerField(db_column='Pop23', blank=True, null=True)  # Field name made lowercase.
    pop24 = models.IntegerField(db_column='Pop24', blank=True, null=True)  # Field name made lowercase.
    pop25 = models.IntegerField(db_column='Pop25', blank=True, null=True)  # Field name made lowercase.
    pop26 = models.IntegerField(db_column='Pop26', blank=True, null=True)  # Field name made lowercase.
    lb = models.IntegerField(db_column='Lb', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pop'
