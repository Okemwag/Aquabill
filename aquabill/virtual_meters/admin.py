from django.contrib import admin
from .models import VirtualMeter, MeterReading

# Register your models here.
admin.site.register(VirtualMeter)
admin.site.register(MeterReading)
