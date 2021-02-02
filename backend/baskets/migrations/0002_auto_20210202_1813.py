# Generated by Django 3.1.5 on 2021-02-02 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baskets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderbasket',
            name='delibery_lname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='delivery_fname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_address',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_city',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_fname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_lname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_phone',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='drop_off_state',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_address',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_city',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_fname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_lname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_phone',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='fedex_off_state',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='pick_up_company',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='pick_up_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='pick_up_hout',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='orderbasket',
            name='pick_up_message',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]