from django.shortcuts import render
from funciones.filtros import *
from mapa.models import Cause
from django.db.models import Sum
import pdb

# Create your views here.
def index(request):
    context = {}
    return render(request, 'mapa/index.html',context)

# Garantizado desde URLs que solo pueda entrar 1 o 2 letras como parametro paises (primer letra)
# anio de ocurrencia
# ID de causa (pk del modelo)
# en caso que sea todas las causas se usara id=0 y aca se resuelve a 'AAA'
#
def data(request, paises, anio,sexo, causaId):
    #pdb.set_trace()
    if int(causaId) == 0:
        causaIni = "AAA"
        causaFin = None
    else:
        c = Cause.objects.get(pk=causaId)
        causaIni = c.CauseStart
        causaFin = c.CauseEnd
    query = tripleFiltro(int(anio),int(sexo),causaIni, causaFin)
    #query = tripleFiltro(2010, "AAA", 2)
    if len(paises) > 1:
        paises = filtrarPaises(paises[0],paises[1])
    else:
        paises = filtrarPaises(paises[0])
    diccionario = generarDic(query, "deaths9",paises)
    context = {"test" : diccionario}
    return render(request, 'mapa/data.html',context)
