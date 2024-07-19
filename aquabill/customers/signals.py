from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Customer
from ..virtual_meters.models import VirtualMeter


@receiver(post_save, sender=Customer)
def assign_virtual_meter(sender, instance, created, **kwargs):
    """
    Assign a virtual meter to a customer when a new customer is created.
    """
    if created:
        VirtualMeter.objects.create(customer=instance, meter_id=f"{instance.id}-VM")
