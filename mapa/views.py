from django.shortcuts import render
from mapa.models import CountryCode, Mort
from django.db.models import Sum

# Create your views here.
def index(request):
    query = Mort.objects.filter(year = 2010).filter(cause='AAA').filter(sex='2')
    #for c in CountryCode.objects.filter(name__startswith='J'):
        #[c.name] = Mort.objects.filter(country=c.country).aggregate(Sum('deaths1'))
        #for q in Mort.objects.raw('SELECT id, deaths1 FROM mort WHERE country = %s',[c.country]):
    diccionario = generarDic(query)
    context = {"test" : diccionario}
    return render(request, 'mapa/index.html',context)

def generarDic(query):
    dic = {}
    for c in CountryCode.objects.filter(name__startswith='A'):
        temp = query.filter(country=c.country).aggregate(Sum('deaths1'))
        dic[c.name] = temp['deaths1__sum']
    return dic
