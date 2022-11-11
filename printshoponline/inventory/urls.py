"""Define the urls for the inventory."""

from django.urls import path
from inventory.views import signup

urlpatterns = [
    path ('signup/', signup, name="signup")
    # path('get-product-list/', get_product_list, name="get_product_list")
]
