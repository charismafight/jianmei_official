from django.shortcuts import render, get_object_or_404, get_list_or_404
from .models import *


# Create your views here.
def index(request):
    context = {'projects': HouseProject.objects.all()[0:3]}
    return render(request, 'jianmei/index.html', context)


def hot_house(request):
    context = {'data': HouseProject.objects.all()}
    return render(request, 'jianmei/hot_house.html', context)


def project_detail(request, pid):
    obj = get_object_or_404(HouseProject, pk=pid)
    designers = obj.designers.all()
    house_type_ids = obj.housetype_set.values('id')
    # 楼盘-楼盘房型-案例-案例图片
    cases = Case.objects.select_related('house_type').filter(house_type_id__in=house_type_ids)

    context = {
        'p': obj,
        'designers': designers,
        'cases': cases
    }
    return render(request, 'jianmei/project_detail.html', context)


def case_detail(request, cid):
    obj = get_object_or_404(Case, pk=cid)
    return render(request, 'jianmei/case_detail.html', {'case': obj})


def house_type_detail(request, htid):
    obj = get_object_or_404(HouseType, pk=htid)
    return render(request, 'jianmei/house_type_detail.html', {'house_type': obj})


def technology(request):
    return render(request, 'jianmei/technology.html', None)
