from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django.core import serializers


# Create your views here.
def  signup(request):
    list1=["2"]
    user_list = User.objects.all()
    print ("User=", user_list)
    return JsonResponse(dict([("data", list(list1))]))