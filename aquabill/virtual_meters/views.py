from rest_framework import viewsets, permissions
from .models import VirtualMeter, MeterReading
from .serializers import VirtualMeterSerializer, MeterReadingSerializer


class VirtualMeterViewSet(viewsets.ModelViewSet):
    serializer_class = VirtualMeterSerializer
    lookup_field = "meter_id"
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return VirtualMeter.objects.filter(customer=self.request.user)

    def get_serializer_class(self) -> type:
        if self.action in ["retrieve", "update", "partial_update"]:
            return VirtualMeterSerializer
        return VirtualMeterSerializer


class MeterReadingViewSet(viewsets.ModelViewSet):
    serializer_class = MeterReadingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return MeterReading.objects.filter(meter__customer=self.request.user)

    def get_serializer_class(self) -> type:
        if self.action in ["retrieve", "update", "partial_update"]:
            return MeterReadingSerializer
        return MeterReadingSerializer
        

