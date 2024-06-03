from django.contrib.admin import site
from .models import CountryModel, VacationModel

site.register(CountryModel)
site.register(VacationModel)