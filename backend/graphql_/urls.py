from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from .mutations import schema as mutation_schema
from .schema import schema as query_schema

urlpatterns = [
    path('graphql/', csrf_exempt(GraphQLView.as_view(schema=query_schema, graphiql=True)), name='graphql'),
    path('mutation/', csrf_exempt(GraphQLView.as_view(schema=mutation_schema, graphiql=True)), name='mutation'),
]
