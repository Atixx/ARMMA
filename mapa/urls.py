from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^data/(?P<pais>[0-9]{4})/(?P<anio>[0-9]{4})/(?P<causaId>[0-9]{1,2})/(?P<sexo>[1,2,0])/(?P<edades>[0-8]{1,2})$', views.data, name='data'),
]
