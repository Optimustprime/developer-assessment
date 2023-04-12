from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')
    list_filter = ('created_at', 'updated_at')


admin.site.register(Product, ProductAdmin)
