from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import status
from utils.app_config import AppConfig
from django.contrib.auth import authenticate
import jwt
from datetime import timedelta, datetime
from users.models import UserModel
from uuid import uuid4
from jwt import ExpiredSignatureError, InvalidTokenError, DecodeError, InvalidSignatureError, InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError

# Define all PyJWT Exceptions as tuple
jwt_errors = (ExpiredSignatureError, InvalidTokenError, DecodeError, InvalidSignatureError,
              InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError)


@api_view(["POST"])
def login(request):

    try:
        credentials = {
            "username": request.data["email"],
            "password": request.data["password"],
        }
        user = authenticate(**credentials)
        if not user:
            return Response({"error": "Wrong credentials"}, status.HTTP_400_BAD_REQUEST)
        # Set access payload
        access_payload = {
            'user_id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'role': user.role.role_type,
            'exp': datetime.utcnow() + timedelta(minutes=10),
            'iat': datetime.utcnow(),
            'iss': AppConfig.issuer,
            'aud': AppConfig.audience,
            'jti': str(uuid4())
        }
        # Set refresh payload
        refresh_payload = access_payload.copy()
        refresh_payload["jti"] = str(uuid4())
        refresh_payload["exp"] = datetime.utcnow() + timedelta(minutes=30)
        # Remove unnecessary fields
        for key in ["first_name", "last_name"]:
            refresh_payload.pop(key, None)
        # Create tokens
        access_token = jwt.encode(
            access_payload, key=AppConfig.secret_key, algorithm="HS256")
        refresh_token = jwt.encode(
            refresh_payload, key=AppConfig.secret_key, algorithm="HS256")
        # Set cookie properties
        access_cookie_props = {
            "key": "access",
            "value": access_token,
            "httponly": True,
            "secure": True,
            "samesite": "Lax",
            # cookie will be expired after 1 day ( I assume that token will expire before)
            "max_age": 3600, # 1 hour
        }
        refresh_cookie_props = access_cookie_props.copy()
        refresh_cookie_props["key"] = "refresh"
        refresh_cookie_props["value"] = refresh_token
        refresh_cookie_props["max_age"] = 14400 # 4 hour
        # Create response
        response = Response(access_token, status=status.HTTP_202_ACCEPTED)
        response.set_cookie(**access_cookie_props)
        response.set_cookie(**refresh_cookie_props)

        return response
    except Exception as err:
        return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# -------------------------------------------------------


@api_view(["DELETE"])
def logout(request):

    try:
        response = Response(status=status.HTTP_204_NO_CONTENT)
        # remove the cookies if exists
        cookie = request.COOKIES.get("access")
        if cookie:
            response.delete_cookie("access")
        cookie = request.COOKIES.get("refresh")
        if cookie:
            response.delete_cookie("refresh")
        return response
    except jwt_errors:
        return
    except Exception as err:
        return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# -------------------------------------------------------


@api_view(["GET"])
def refresh_token(request):

    try:
        response = Response(status=status.HTTP_200_OK)
        # remove the cookie if exists
        refresh_cookie = request.COOKIES.get("refresh")
        # If cookie not exists user unauthorized
        if not refresh_cookie:
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
        header_data = jwt.get_unverified_header(refresh_cookie)
        decoded = jwt.decode(refresh_cookie, AppConfig.secret_key,
                             audience=AppConfig.audience, algorithm=[header_data["alg"]])
        print(decoded["user_id"])

        return response
    except jwt_errors:
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        return Response({"error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
