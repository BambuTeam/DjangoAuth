from django.db import models


# Create your models here.

class OrderBasket(models.Model):
    is_rush = models.BooleanField(default=True, null=False)
    is_custom = models.BooleanField(default=False, null=False)
    custom_order_text = models.CharField(max_length=200, null=True)
    order_date = models.DateField()
    order_hour = models.TimeField()
    give_aways = models.IntegerField()
    vip = models.IntegerField()
    show_baskets = models.IntegerField()
    comments = models.CharField(max_length=500)
    delibery_type = models.CharField(max_length=80)
    pick_up_message = models.CharField(max_length=120, null=True, blank=True)
    pick_up_company = models.CharField(max_length=100, null=True, blank=True)
    pick_up_date = models.DateField(  null=True, blank=True)
    pick_up_hout = models.TimeField( null=True, blank=True)
    delivery_fname = models.CharField(max_length=100,  null=True, blank=True)
    delibery_lname =models.CharField(max_length=100,  null=True, blank=True)
    drop_off_fname = models.CharField(max_length=100, null=True, blank=True)
    drop_off_lname = models.CharField(max_length=100, null=True, blank=True)
    drop_off_address = models.CharField(max_length=100, null=True, blank=True)
    drop_off_city = models.CharField(max_length=100, null=True, blank=True)
    drop_off_state = models.CharField(max_length=100, null=True, blank=True)
    drop_off_phone = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_fname = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_lname = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_address = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_city = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_state = models.CharField(max_length=100, null=True, blank=True)
    fedex_off_phone = models.CharField(max_length=100, null=True, blank=True)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id





