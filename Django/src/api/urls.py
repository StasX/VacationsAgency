from django.contrib import admin
from django.urls import path, include
from .views import logout, login, refresh_token
urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/login", login),
    path("api/auth/logout", logout),
    path("api/auth/refresh-token", refresh_token),
    path("api/vacations/", include("vacations.urls")),
    path("api/users/", include("users.urls")),
    path("api/likes/", include("likes.urls")),
]
