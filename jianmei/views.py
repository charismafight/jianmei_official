from django.shortcuts import render, get_object_or_404, get_list_or_404
from .models import *


# Create your views here.
def index(request):
    if request.method == 'POST':
        p = Appointment(
            name=request.POST.get('name', '匿名'),
            mobile_phone=request.POST['phone'],
            area=0 if request.POST.get('area', 0) == '' else request.POST.get('area', 0),
            district=request.POST.get('district', '')
        )
        Appointment.save(p)
        return render(request, 'jianmei/index.html', None)
    else:
        cases = Case.objects.filter(caseimage__is_show_on_index=True)[0:9]
        context = {
            'projects': HouseProject.objects.all()[0:4],
            'cases': cases,
            'caseimages': list(map(lambda c: c.caseimage_set.get(is_show_on_index=True), cases)),
            'designers': Designer.objects.filter(show_on_index=True)[0:5],
            # 百科
            'encyclopediaTop': Article.objects.filter(image__isnull=False).filter(type='装修百科')[0:1],
            'encyclopediaBottom': Article.objects.filter(type='装修百科')[0:3],
            'schoolTop': Article.objects.filter(image__isnull=False).filter(type='装修学堂')[0:1],
            'schoolBottom': Article.objects.filter(type='装修学堂')[0:3],
            'appointmentCount': Appointment.objects.count(),
            'logo': Logo.objects.first(),
        }
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


def designer(request, id):
    return render(request, 'jianmei/designer.html', {'designer': Designer.objects.get(id=id)})


def article(request, id):
    # 每一次get记录增加1
    current_article = Article.objects.get(id=id)
    if current_article:
        current_article.click_count += 1
        Article.save(current_article)
    latest = Article.objects.order_by('-publish_date')[:2]
    return render(request, 'jianmei/article.html', {'article': Article.objects.get(id=id), 'latest': latest})


def network_discount(request):
    return render(request, 'jianmei/network_discount.html')
