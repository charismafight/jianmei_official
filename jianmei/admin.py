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


admin.site.register(HouseProject)
admin.site.register(HouseType)
admin.site.register(Designer)
