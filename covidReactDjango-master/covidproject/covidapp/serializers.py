from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from covidapp.models import Register, UserProfile


# Register Serializer
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Register
#         fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('friends', 'picture')

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    userProfile = UserProfileSerializer()
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'userProfile')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect")
