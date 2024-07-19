from django.db import models
from django.core.mail import send_mail
from django.db import transaction
from ..customers.models import Customer
from django.conf import settings

# Create your models here.

class Account(models.Model):
    class Status(models.TextChoices):
        ACTIVE = "ACTIVE"
        INACTIVE = "INACTIVE"
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.ACTIVE)

    def __str__(self) -> str:
        return f"{self.customer} - {self.balance}"

    @transaction.atomic
    def update_balance_and_status(self):
        account = self.customer.account
        if not account:
            raise ValueError("Account does not exist for this customer.")

        total_usage = self.total_usage
        balance_deduction = (
            total_usage  # Assuming 1 unit of usage costs 1 unit of currency
        )

        if account.balance < balance_deduction:
            self._handle_low_balance(account, balance_deduction)
        else:
            account.balance -= balance_deduction
            account.save()

        if account.balance <= 0:
            self._shut_off_meter()

    def _handle_low_balance(self, account, balance_deduction):
        self._notify_customer_low_balance(account, balance_deduction)

    def _notify_customer_low_balance(self, account, balance_deduction):
        send_mail(
            "Low Balance Warning",
            f"Your balance is low. Deducted {balance_deduction} from your account.",
            settings.DEFAULT_FROM_EMAIL,
            [self.customer.email],
        )

    def _shut_off_meter(self):
        self.status = self.Status.INACTIVE
        self.save()
