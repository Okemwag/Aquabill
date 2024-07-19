import uuid
from django.db import models
from ..customers.models import Customer
from ..virtual_meters.models import VirtualMeter

# Create your models here.
class Payment(models.Model):
    class PaymentStatus(models.TextChoices):
        PENDING = "PENDING"
        PAID = "PAID"
        FAILED = "FAILED"

    payment_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    meter = models.ForeignKey(VirtualMeter, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, default=PaymentStatus.PENDING, choices=PaymentStatus.choices)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.customer} - {self.amount} - {self.date_created}"