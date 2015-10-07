from django.shortcuts import render
from funciones.filtros import *
from django.db.models import Sum

# Create your views here.
def index(request):
    query = tripleFiltro(2010, "AAA", 2)
    #for c in CountryCode.objects.filter(name__startswith='J'):
        #[c.name] = Mort.objects.filter(country=c.country).aggregate(Sum('deaths1'))
        #for q in Mort.objects.raw('SELECT id, deaths1 FROM mort WHERE country = %s',[c.country]):
    diccionario = generarDic(query, "deaths9")
    context = {"test" : diccionario}
    return render(request, 'mapa/index.html',context)
