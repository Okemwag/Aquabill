from rest_framework import viewsets, permissions
from .models import Payment
from .serializers import PaymentSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Payment.objects.filter(customer=self.request.user)

    def get_serializer_class(self) -> type:
        if self.action in ["retrieve", "update", "partial_update"]:
            return PaymentSerializer
        return PaymentSerializer
