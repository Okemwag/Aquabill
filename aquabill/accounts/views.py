from rest_framework import viewsets, permissions
from .models import Account
from .serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Account.objects.filter(customer=self.request.user)

    def get_serializer_class(self) -> type:
        if self.action in ["retrieve", "update", "partial_update"]:
            return AccountSerializer
        return AccountSerializer