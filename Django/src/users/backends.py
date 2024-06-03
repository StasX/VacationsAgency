from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from .models import UserModel
from utils.security import Security


class AuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = UserModel.objects.get(email=username)
            if Security.hash(password) == user.password and user.role.role_type == "Admin":
                return user
        except UserModel.DoesNotExist:
            return None
