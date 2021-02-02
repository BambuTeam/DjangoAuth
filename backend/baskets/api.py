from baskets.models import OrderBasket
from rest_framework import viewsets, permissions
from baskets.serializers import OrderBasketreateSerializer


class OerderBasketViewSet(view):
    queryset = OrderBasket.OrderBasket
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderBasketreateSerializer