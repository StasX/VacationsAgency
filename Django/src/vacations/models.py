from django.db.models import Model, CharField, DateField, ForeignKey, DO_NOTHING, FloatField
from datetime import datetime


class CountryModel(Model):
    name = CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'countries'

# ------------------------------------------------------------------------------------------


class VacationModel(Model):
    country = ForeignKey(CountryModel, DO_NOTHING)
    description = CharField(max_length=500)
    start_date = DateField()
    end_date = DateField()
    price = FloatField()
    image = CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'vacations'
# ------------------------------------------------------------------------------------------
