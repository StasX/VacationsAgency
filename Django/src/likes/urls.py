from django.urls import path
from . import views

urlpatterns = [
    path('total', views.total_likes),
    path('statistics', views.likes_statistics),
]