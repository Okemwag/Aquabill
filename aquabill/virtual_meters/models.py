from django.db import models
from django.utils.crypto import get_random_string
from ..customers.models import Customer

# Create your models here.
class VirtualMeter(models.Model):
    class Status(models.TextChoices):
        ACTIVE = "active"
        INACTIVE = "inactive"
        SUSPENDED = "suspended"
        DELETED = "deleted"
    meter_id = models.CharField(max_length=200, unique=True, blank=True, db_index=True)
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.ACTIVE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.meter_id

    @staticmethod
    def generate_meter_id(length=10) -> str:
        meter_id = get_random_string(length=length)
        while VirtualMeter.objects.filter(meter_id=meter_id).exists():
            meter_id = get_random_string(length=length)
        return meter_id
        

    @property
    def latest_reading(self):
        latest_reading = self.readings.order_by("-timestamp").first()
        return latest_reading.reading if latest_reading else 0

    @property
    def total_usage(self):
        total_usage = self.readings.aggregate(models.Sum("usage"))["usage__sum"]
        return total_usage if total_usage else 0

class MeterReading(models.Model):
    meter = models.ForeignKey(VirtualMeter, on_delete=models.CASCADE, related_name="readings")
    reading = models.FloatField()
    usage = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.meter.meter_id} - {self.reading} - {self.timestamp}"


    class Meta:
        ordering = ["-timestamp"]
