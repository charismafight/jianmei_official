from django.shortcuts import render
from .models import *


# Create your views here.
def index(request):
    return render(request, 'jianmei/index.html', None)


def hot_house(request):
    context = {'data': HouseProject.objects.all()}
    return render(request, 'jianmei/hot_house.html', context)
