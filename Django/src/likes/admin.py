from django.contrib.admin import site
from .models import LikeModel


site.register(LikeModel)
