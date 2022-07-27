from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=100)
    category = models.CharField(max_length=30)
    # Check the difference between null and blank
    size = models.CharField(max_length=30, null=True,
                            blank=True)
    color = models.CharField(max_length=30, null=True,
                            blank=True)
    price = models.FloatField()
    weight = models.FloatField(null=True, blank=True)
    material = models.CharField(max_length=30)
    last_updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField(null=True, blank=True)
    image = models.FileField(upload_to='uploads/')

    class Meta:
        unique_together = ('product_name', 'size', 'material')

    def __str__(self):
        return '{} ({})'.format(self.product_name, self.size)
