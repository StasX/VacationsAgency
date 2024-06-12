from rest_framework.response import Response
from rest_framework import status
from utils.app_config import AppConfig
from django.http import HttpResponse
import jwt
from jwt import ExpiredSignatureError, InvalidTokenError, DecodeError, InvalidSignatureError, InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError

# Define all PyJWT Exceptions as tuple
JWT_ERRORS = (InvalidTokenError, DecodeError, InvalidSignatureError,
              InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError)


def auth_middleware(get_response):

    def middleware(request):
        try:
            if not request.path.startswith("/api/auth/"):
                token = request.headers["Authorization"]
                if not str(token):
                    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
                header_data = jwt.get_unverified_header(token)
                decoded = jwt.decode(
                    token, AppConfig.secret_key, audience=AppConfig.audience, algorithms=[header_data["alg"]])
                # Check if token type is access and user role is Admin
                if decoded["type"] != "access" and decoded["role"] != "Admin":
                    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
            response = get_response(request)
            return response
        except ExpiredSignatureError as err:
            # Token expired and user should to try refresh it
            # Check if refresh cookie exist
            refresh_cookie = request.COOKIES.get("refresh")
            # Refresh cookie not exists
            if not refresh_cookie:
                return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
            # Refresh cookie exist
            return HttpResponse(status=status.HTTP_406_NOT_ACCEPTABLE)
        except JWT_ERRORS as err:
            # Token invalid
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        except Exception as err:
            return Response({"error": err}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return middleware
