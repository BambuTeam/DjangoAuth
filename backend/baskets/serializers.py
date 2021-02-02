
from rest_framework import serializers
from baskets.models import OrderBasket




class OrderBasketreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderBasket
        fields = '__all__'



