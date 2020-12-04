from covidapp.models import Register
from rest_framework import viewsets, permissions
from .serializers import RegisterSerializer

# Register Viewsets
class RegisterViewset(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RegisterSerializer

