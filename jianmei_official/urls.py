"""jianmei_official URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from jianmei import views
from django.views.generic.base import RedirectView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('', views.index),
                  path('house/', views.hot_house),
                  path(r'house/<int:pid>', views.project_detail),
                  path(r'case/<int:cid>', views.case_detail),
                  path(r'house-type/<int:htid>', views.house_type_detail),
                  path(r'^favicon.ico$', RedirectView.as_view(url=r'static/favicon.ico')),
                  path(r'technology', views.technology),
                  path(r'designer/<int:id>', views.designer),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
