from django.shortcuts import render
from mapa.models import CountryCode
from mapa.models import Mort
from django.db.models import Sum

# Create your views here.
def index(request):
    diccionario = {}
    for c in CountryCode.objects.filter(name__startswith='A'):
        total = 0
        diccionario[c.name] = Mort.objects.filter(country=c.country).aggregate(Sum('deaths1'))
        #for q in Mort.objects.raw('SELECT id, deaths1 FROM mort WHERE country = %s',[c.country]):
        #for q in Mort.objects.filter(country=c.country):
        #    total += q.deaths1
        #diccionario[c.name] = total
    context = {"test" : diccionario}
    return render(request, 'mapa/index.html',context)
