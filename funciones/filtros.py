from mapa.models import CountryCode, Mort
from django.db.models import Sum

    #Recibe el anio de ocurrencia, la causa, y el genero (0 para indistinto)
def tripleFiltro(anio, causa, sexo):
    if (sexo != 0):
        query = Mort.objects.filter(year = anio).filter(cause=causa).filter(sex=sexo)
    else:
        query = Mort.objects.filter(year = anio).filter(cause=causa)
    return query

def filtrarPaises(inicio, fin = None): #fin es excluyente, A-B no responderia con los paises de B
    if fin is None:
        paises =  CountryCode.objects.filter(name__startswith=inicio)
    else:
        paises =  CountryCode.objects.filter(name__range=(inicio,fin))
    return paises


def generarDic(query, grupoEdad, paises):
    dic = {}
    for c in paises:
        dic[c.name] = query.filter(country=c.country).aggregate(total=Sum(grupoEdad))['total']
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
