from rest_framework import serializers
from .models import VirtualMeter, MeterReading


class VirtualMeterSerializer(serializers.ModelSerializer):
    class Meta:
        model = VirtualMeter
        fields = ["meter_id", "customer","status", "date_created"]


class MeterReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeterReading
        fields = ["meter", "reading", "usage", "timestamp"]