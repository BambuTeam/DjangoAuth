from baskets.models import OrderBasket
from rest_framework import viewsets, permissions
from baskets.serializers import OrderBasketreateSerializer


class OerderBasketViewSet(viewsets.ModelViewSet):
    queryset = OrderBasket.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderBasketreateSerializer