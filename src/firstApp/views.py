from django.shortcuts import render


# Create your views here.

def index(request):
    # Votre code ici, en utilisant l'argument si nécessaire
    return render(request, 'firstApp/index.html')

