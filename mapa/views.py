from django.shortcuts import render
from funciones.filtros import *
from django.db.models import Sum

# Create your views here.
def index(request):
    context = {}
    return render(request, 'mapa/index.html',context)

def data(request, paises): #Garantizado desde URLs que solo pueda entrar 1 o 2 letras como parametro paises
    query = tripleFiltro(2010, "AAA", 2)
    if len(paises) > 1:
        paises = filtrarPaises(paises[0],paises[1])
    else:
        paises = filtrarPaises(paises[0])
    diccionario = generarDic(query, "deaths9",paises)
    context = {"test" : diccionario}
    return render(request, 'mapa/data.html',context)
