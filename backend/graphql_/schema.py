import graphene
from products.models import Product
from .types import ProductType
from graphene_django import DjangoObjectType
from products.models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)

    def resolve_all_products(root, info):
        return Product.objects.all()


schema = graphene.Schema(query=Query)
