from django.shortcuts import render
from funciones.filtros import *
from mapa.models import *
from django.db.models import Sum
import pdb

# Create your views here.
def index(request):
    causas = Cause.objects.all()
    years = range(1988, 2014)
    context = {"causas" : causas, "years" : years }
    return render(request, 'mapa/index.html',context)

# Pais: pk del pais
# anio de ocurrencia
# ID de causa (como esta definido en index.html)
# en caso que sea todas las causas se usara id=0 y aca se resuelve a 'AAA'
#
def data(request, pais, anio,sexo, causaId, edades):
    #pdb.set_trace()
    if int(causaId) == 0:
        causaIni = "AAA"
        causaFin = None
    else:
        c = Cause.objects.get(pk=causaId)
        causaIni = c.CauseStart
        causaFin = c.CauseEnd
    pais = CountryCode.objects.get(pk=pais)
    myPais = xPais(pais, anio, sexo, causaIni, causaFin, edades)
    diccionario = {int(pais.country) : myPais}
    context = {"data" : diccionario}
    return render(request, 'mapa/data.html',context)
