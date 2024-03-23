from django.contrib import admin

from projects.models import Projects, ProjectLanguages, ProjectFrameworks

class LanguageInline(admin.TabularInline):
  model = ProjectLanguages
  extra = 1

class FrameworkInline(admin.TabularInline):
  model = ProjectFrameworks
  extra = 1

class ProjectsAdmin(admin.ModelAdmin):
  inlines = [LanguageInline, FrameworkInline]
  list_display = ('name', 'display_languages', 'display_frameworks')

  def display_languages(self, obj):
    return ", ".join([language.name for language in obj.language.all()])
  
  def display_frameworks(self, obj):
    return ", ".join([framework.name for framework in obj.framework.all()])
  
  display_languages.short_description = 'Languages'
  display_frameworks.short_description = 'Frameworks'

admin.site.register(Projects, ProjectsAdmin)
