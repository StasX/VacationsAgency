from django.db.models import Model, ForeignKey, DO_NOTHING, OneToOneField
from users.models import UserModel
from vacations.models import VacationModel
from rest_framework.serializers import Serializer, CharField, IntegerField
from rest_framework.serializers import Serializer
from users.models import UserModel
from vacations.models import VacationModel


class LikeModel(Model):

    user = OneToOneField(UserModel, DO_NOTHING, primary_key=True)
    vacation = ForeignKey(VacationModel, DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'likes'
        unique_together = (('user', 'vacation'),)


# ------------------------------------------------------------------------------------------

class LikesSerializer(Serializer):
    destination = CharField()
    likes = IntegerField()
