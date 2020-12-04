from django.urls import path
from rest_framework import routers

from . import views
# from .api import RegisterViewset
from knox import views as knox_views

router = routers.DefaultRouter()
# router.register('api/covidapp/register', RegisterViewset, "register")
router.register('api/users', views.UserViewSet, "register")

urlpatterns = [
  path('api/auth/login/', views.LoginApi.as_view()),
  path('api/auth/register/', views.RegisterApi.as_view()),
  path('api/auth/user/', views.UserApi.as_view()),
  path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout')
]
urlpatterns += router.urls
