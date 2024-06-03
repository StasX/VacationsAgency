from rest_framework.response import Response
from rest_framework import status
from utils.app_config import AppConfig
from django.http import HttpResponse
import jwt
from jwt import ExpiredSignatureError, InvalidTokenError, DecodeError, InvalidSignatureError, InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError

# Define all PyJWT Exceptions as tuple
jwt_errors = (InvalidTokenError, DecodeError, InvalidSignatureError,
              InvalidAudienceError, InvalidIssuerError, ImmatureSignatureError, MissingRequiredClaimError, PyJWTError)


def auth_middleware(get_response):

    def middleware(request):
        try:
            if not request.path.startswith("/api/auth/"):
                # Check refresh and access token
                access_cookie = request.COOKIES.get("access")
                refresh_cookie = request.COOKIES.get("refresh")
                # If cookies not exists user unauthorized
                if not access_cookie and not refresh_cookie:
                    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
                # If access cookie not exists it may have expired so user have to refresh tokens
                elif not access_cookie:
                    return HttpResponse(status=status.HTTP_410_GONE)
                header_data = jwt.get_unverified_header(access_cookie)
                decoded = jwt.decode(
                    access_cookie, AppConfig.secret_key, audience=AppConfig.audience, algorithms=[header_data["alg"]])
            response = get_response(request)
            return response
        except ExpiredSignatureError as err:
            # Token expired and user should to try refresh it
            return HttpResponse(status=status.HTTP_410_GONE)
        except jwt_errors as err:
            # Token invalid
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        except Exception as err:
            return Response({"error": err}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return middleware
