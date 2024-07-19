from rest_framework import routers
from .views import VirtualMeterViewSet, MeterReadingViewSet

router = routers.DefaultRouter()

router.register(r"virtual-meters", VirtualMeterViewSet, basename="virtual-meters")

router.register(r"meter-readings", MeterReadingViewSet, basename="meter-readings")

urlpatterns = router.urls