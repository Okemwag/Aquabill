from rest_framework import routers
from .views import AccountViewSet

router = routers.DefaultRouter()
router.register(r"accounts", AccountViewSet, basename="account")

urlpatterns = router.urls