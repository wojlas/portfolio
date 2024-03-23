from django.contrib import admin
from django.urls import path

from portfolio_api.views import FrameworksView, LanguagesView, WordingsView
from projects.views import ProjectsView, ProjectDetailsView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/snippets/<str:lang>', WordingsView.as_view()),
    path('api/languages', LanguagesView.as_view()),
    path('api/frameworks', FrameworksView.as_view()),
    path('api/projects', ProjectsView.as_view()),
    path('api/projects/<int:id>', ProjectDetailsView.as_view()),
]
