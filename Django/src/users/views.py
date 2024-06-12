from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import UserModel
from django.utils.decorators import decorator_from_middleware


@api_view(["GET"])
def total_users(request):
    try:
        total = UserModel.objects.all().count()
        json = {"total_users": total}
        return Response(json)
    except Exception as err:
        return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# -------------------------------------------------------
