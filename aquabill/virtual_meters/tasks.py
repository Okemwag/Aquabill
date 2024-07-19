from celery import shared_task
from .models import VirtualMeter, MeterReading
from django.core.exceptions import ObjectDoesNotExist
import logging


@shared_task
def increase_meter_reading(meter_id: str, reading: float) -> None:
    try:
        meter = VirtualMeter.objects.get(meter_id=meter_id)
    except ObjectDoesNotExist:
        logging.error(f"Meter with ID {meter_id} does not exist.")
        return

    latest_reading = getattr(meter, "latest_reading", 0)
    usage = reading - latest_reading
    MeterReading.objects.create(meter=meter, reading=reading, usage=usage)
    meter.latest_reading = reading
    meter.save()
