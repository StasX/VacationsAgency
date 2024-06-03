from django.urls import path
from . import views

urlpatterns = [
    path('total', views.total_users),
]