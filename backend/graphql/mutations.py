import graphene
from graphene_django import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"


class CreateProduct(graphene.Mutation):
    product = graphene.Field(ProductType)

    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        sku = graphene.String(required=True)
        price = graphene.Float(required=True)
        image = graphene.String(required=True)

    def mutate(self, info, name, description, sku, price, image):
        product = Product(name=name, description=description, sku=sku, price=price, image=image)
        product.save()

        return CreateProduct(product=product)


class Mutation(graphene.ObjectType):
    create_product = CreateProduct.Field()
