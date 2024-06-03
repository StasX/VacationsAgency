from django.contrib.admin import site
from .models import UserModel, RoleModel

site.register(RoleModel)
site.register(UserModel)
