from .models import Account
from rest_framework import serializers


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("id","balance", "customer")
        read_only_fields = ("id", "balance", "customer")

    def create(self, validated_data):
        return Account.objects.create(**validated_data)