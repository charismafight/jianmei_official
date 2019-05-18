from django.contrib import admin
from .models import *


# Register your models here.
class CaseImageInline(admin.TabularInline):
    model = CaseImage


@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    inlines = [
        CaseImageInline,
    ]


class HouseTypeImageInline(admin.TabularInline):
    model = HouseTypeImage


@admin.register(HouseType)
class HouseTypeAdmin(admin.ModelAdmin):
    inlines = [HouseTypeImageInline]


admin.site.register(HouseProject)
admin.site.register(Designer)
admin.site.register(Article)
admin.site.register(Appointment)
