from django.contrib import admin
from django.urls import path

from portfolio_api.views import FrameworksView, LanguagesView, WordingsView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/snippets/<str:lang>', WordingsView.as_view()),
    path('api/languages', LanguagesView.as_view()),
    path('api/frameworks', FrameworksView.as_view()),
    # path('projects/', include('projects.urls')),
]
