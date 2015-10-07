from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^data/(?P<paises>[A-Z]{1,2})$', views.data, name='data'),
]
