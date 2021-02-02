from rest_framework import routers
from .api import OerderBasketViewSet

router = routers.DefaultRouter()
router.register('/orders', OerderBasketViewSet, 'baskets')

urlpatterns = router.urls