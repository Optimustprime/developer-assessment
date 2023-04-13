import graphene
from .types import ProductType
from .schema import Query
from graphene_django import DjangoObjectType
from products.models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product


class AddToCartMutation(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID(required=True)
        quantity = graphene.Int(required=True)

    success = graphene.Boolean()
    message = graphene.String()

    def mutate(root, info, product_id, quantity):
        # Perform logic to add product to cart
        # Return success and message
        success = True
        message = "Product added to cart successfully"
        return AddToCartMutation(success=success, message=message)


class Mutation(graphene.ObjectType):
    add_to_cart = AddToCartMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
