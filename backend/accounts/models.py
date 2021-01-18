from django.db import models
from django.contrib.auth.models import AbstracBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users mus have an email addres')


        
        email = self.email
        user - self.(email=email, name=name)
        user.set_password(password)
        user.save()
        return user
        
    
    #if I want create a super user have to user 
    #def create_superuser():



class UserAccount(AbstractBaseUser, PeirmissionsMixin):
    email = models.EmailField(max_length=255, unique =True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email





