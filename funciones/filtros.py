from mapa.models import CountryCode, Mort, Pop
from django.db.models import Sum
import pdb

    #Recibe el anio de ocurrencia, la causa, y el genero (0 para indistinto)
def tripleFiltro(anio, sexo, causaIni, causaFin = None):
    if causaFin == None:
        if (sexo != 0):
            query = Mort.objects.filter(year = anio).filter(cause=causaIni).filter(sex=sexo)
        else:
            query = Mort.objects.filter(year = anio).filter(cause=causaIni)
    else:
        if (sexo != 0):
            query = Mort.objects.filter(year = anio).filter(cause__range=(causaIni, causaFin)).filter(sex=sexo).exclude(cause='AAA')
        else:
            query = Mort.objects.filter(year = anio).filter(cause__range=(causaIni, causaFin)).exclude(cause='AAA')
    return query

def poblacion(anio, sexo):
    if (int(sexo) !=0):
        pop = Pop.objects.filter(year=anio).filter(sex=sexo)
    else:
        pop = Pop.objects.filter(year=anio)
    return pop

def filtrarPaises(inicio, fin = None): #fin es excluyente, A-B no responderia con los paises de B
    if fin is None:
        paises =  CountryCode.objects.filter(name__startswith=inicio)
    else:
        paises =  CountryCode.objects.filter(name__range=(inicio,fin))
    return paises


def generarInfoPais(query, population, deathsSearch,popSearch):
    #pdb.set_trace()



    death = query.filter(country=c.country).aggregate(totalD=Sum(deathsSearch))['totalD']
    pop = population.filter(country=c.country).aggregate(totalP=Sum(popSearch))['totalP']
    if (death and pop):
        dic[c.name] = ((death+0.0)/pop)
    else:
        dic[c.name] = None
        #dic[c.country] = query.filter(country=c.country).aggregate(total=Sum(grupoEdad))['total']
    #else: #Quedo para sumar 2 edades, no puede contemplar parametros variables
    #    for c in CountryCode.objects.filter(name__startswith='A'):
    #    dic[c.name] = query.filter(country=c.country).aggregate(total=Sum(grupoInicio)+Sum('deaths9'))['total']
    #    query.aggregate(total=Sum('deaths10')+Sum('deaths9'))['total']
    return dic

def ultimoAnioPop(pais, anioReal):
    p = Pop.objects.filter(country=pais).filter(year__lt=anioReal).order_by('-year')
    if (p):
        return int(p[0].year)
    else:
        return None

#edades 0-8: segun la tabla
def xPais(pais, anio, sexo, causaIni, causaFin, edades):
    retval = 0
    if causaFin == None:
        if (sexo != 0):
            query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause=causaIni).filter(sex=sexo)
        else:
            query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause=causaIni)
    else:
        if (sexo != 0):
            query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause__range=(causaIni, causaFin)).filter(sex=sexo).exclude(cause='AAA')
        else:
            query = Mort.objects.filter(country=pais.country).filter(year = anio).filter(cause__range=(causaIni, causaFin)).exclude(cause='AAA')
    for l in formatoEdades(int(edades)):
        find = 'deaths'+l
        q = query.aggregate(total=Sum(find))['total']
        if q:
            retval += q
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
