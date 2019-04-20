from django.urls import path

from vuegerine.views import VueIndex

urlpatterns = [
    path('', VueIndex.as_view()),
    path('hello', VueIndex.as_view()),
]
