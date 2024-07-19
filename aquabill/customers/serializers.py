from .models import Customer
from rest_framework import serializers
from django.contrib.auth import authenticate
from phonenumber_field.serializerfields import PhoneNumberField


class CustomUserSerializer(serializers.ModelSerializer):
    phone_number = PhoneNumberField()
    class Meta:
        model = Customer
        fields = ("id", "username", "email", "phone_number")


class UserRegistrationSerializer(serializers.ModelSerializer):
    phone_number = PhoneNumberField()
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = Customer
        fields = ("id", "username", "email", "phone_number", "password1", "password2")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        if attrs["password1"] != attrs["password2"]:
            raise serializers.ValidationError("Passwords do not match!")

        password = attrs.get("password1", "")
        if len(password) < 8:
            raise serializers.ValidationError(
                "Passwords must be at least 8 characters!"
            )

        return attrs

    def create(self, validated_data):
        password = validated_data.pop("password1")
        validated_data.pop("password2")

        return Customer.objects.create_user(password=password, **validated_data)


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials!")
