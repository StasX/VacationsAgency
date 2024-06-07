
from flask import session
from logic.likes_logic import LikesLogic
from models.client_errors import AuthError


class LikesFacade:
    def __init__(self):
        self.logic = LikesLogic()

    # like vacation when liked / unlike vacation when not liked
    def like(self, vacation_id):
        # Get an user from the session
        user = session.get("current_user")
        if not user:
            raise AuthError("User not authorized")
        self.logic.like(user["id"], vacation_id)

