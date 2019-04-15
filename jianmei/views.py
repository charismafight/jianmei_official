from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'jianmei/index.html', None)


def hot_house(request):
    return render(request, 'jianmei/hot_house.html', None)
