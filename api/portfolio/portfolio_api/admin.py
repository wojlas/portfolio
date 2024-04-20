from django.contrib import admin

from portfolio_api.models import AboutMeModel, Wording, Languages, Frameworks, LanguagesFrameworks

admin.site.register(Wording)
admin.site.register(Languages)
admin.site.register(AboutMeModel)

class LanguageInline(admin.TabularInline):
  model = LanguagesFrameworks
  extra = 1

class FrameworkAdmin(admin.ModelAdmin):
  inlines = [LanguageInline]

admin.site.register(Frameworks, FrameworkAdmin)
