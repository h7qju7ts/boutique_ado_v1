from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm

# Create your views here.

def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))
    
    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key' : 'pk_test_51SkrC9BAQhfMro6irNg3SWoeLEHx1cLhsDxdr3xR5j0fy14ZTvyxgA72lhPRYockhDRTiMTEru4o8Jh3DV81bL9H00c2dPd97p',
        'client_secret' : 'test_client_secret',
    }

    return render(request, template, context)