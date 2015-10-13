from mapa.models import CountryCode, Mort, Pop
from django.db.models import Sum

def ultimoAnioPop(pais, anioReal):
    p = Pop.objects.filter(country=pais).filter(year__lt=anioReal).order_by('-year')
    if (p):
        return int(p[0].year)
    else:
        return None

#edades 0-8: segun la tabla
def xPais(pais, anio, sexo, causaIni, causaFin, edades):
    retval = 0
    mortality = 0
    popTotal = 0
    anioPop = ultimoAnioPop(pais.country, anio)
    if anioPop:
        if causaFin == None:
            if (int(sexo) != 0):
                query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause=causaIni).filter(sex=sexo)
                poblacion = Pop.objects.filter(country=pais.country).filter(year = anioPop).filter(sex=sexo)
            else:
                query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause=causaIni)
                poblacion = Pop.objects.filter(country=pais.country).filter(year = anioPop)
        else:
            if (int(sexo) != 0):
                query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause__range=(causaIni, causaFin)).filter(sex=sexo).exclude(cause='AAA')
                poblacion = Pop.objects.filter(country=pais.country).filter(year = anioPop).filter(sex=sexo)
            else:
                query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause__range=(causaIni, causaFin)).exclude(cause='AAA')
                poblacion = Pop.objects.filter(country=pais.country).filter(year = anioPop)
            poblacion = Pop.objects.filter(country=pais.country).filter(year = anioPop)
        for l in formatoEdades(int(edades)):
            find = 'deaths'+l
            findPop = 'pop'+l
            q = query.aggregate(total=Sum(find))['total']
            p = poblacion.aggregate(total=Sum(findPop))['total']
            if q:
                mortality += q
            if p:
                popTotal += p
        if q and p:
            retval = (((q+0.0)/p)*1000)
        else:
            retval = None
    else:
        retval = None
    return retval

def formatoEdades(edades):
    if edades == 0:
        lookup = ['1']
    if edades == 1:
        lookup = ['3','4','5','6']
    if edades == 2:
        lookup = ['7','8']
    if edades == 3:
        lookup = ['9','10']
    if edades == 4:
        lookup = ['11','12']
    if edades == 5:
        lookup = ['13','14']
    if edades == 6:
        lookup = ['15','16']
    if edades == 7:
        lookup = ['17','18']
    if edades == 8:
        lookup = ['19','20','21','22','23','24','25']
    return lookup


#a b
#c d e
#f g h i j k
#l m n o p q
#r s t u v w x y z
