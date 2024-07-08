from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('contact/',views.contact,name='contact'),
    path('portfolio/',views.portfolio,name='portfolio'),
    path('pricing/',views.pricing,name='pricing'),
    path('services/online-education/',views.education,name='education'),
    path('services/website-redesign/',views.redesign,name='redesign'),
    path('services/website-development/',views.development,name='development'),
    path('services/website-maintenance/',views.maintenance,name='maintenance'),
    path('services/standard-services/',views.standard,name='standard'),
]
