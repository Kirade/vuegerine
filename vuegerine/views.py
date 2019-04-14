from django.views.generic import TemplateView


class VueIndex(TemplateView):
    template_name = 'index.html'
