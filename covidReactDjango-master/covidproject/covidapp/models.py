from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Register(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    # image = models.ImageField(upload_to='pics')
    status = models.BooleanField(default=False)


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='userProfile', on_delete=models.CASCADE)
    friends = models.CharField(max_length=100)
    picture = models.CharField(max_length=100)
