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
            query = Mort.objects.filter(year = anio).filter(cause__range=(causaIni, causaFin)).filter(sex=sexo)
        else:
            query = Mort.objects.filter(year = anio).filter(cause__range=(causaIni, causaFin))
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


def generarDic(query, population, deathsSearch,popSearch, paises):
    #pdb.set_trace()
    dic = {}
    for c in paises:
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

#a b
#c d e
#f g h i j k
#l m n o p q
#r s t u v w x y z
