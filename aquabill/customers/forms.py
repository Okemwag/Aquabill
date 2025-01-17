from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Customer as CustomUser


class CustomerCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ("email",)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("email",)
