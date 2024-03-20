from django.db import models

class Wording(models.Model):
  # translations snippets for languages: PL and ENG
  
  key = models.CharField(max_length=64, blank=False, null=False)
  lang_pl = models.CharField(max_length=256, blank=False, null=False)
  lang_eng = models.CharField(max_length=256, blank=False, null=False)

class Languages(models.Model):
  # list of all languages known by me 
  name = models.CharField(max_length=64, blank=False, null=False)
  is_frontend = models.BooleanField(default=True)

class Frameworks(models.Model):
  # list of all frameworks which I know

  name = models.CharField(max_length=64, blank=False, null=False)
  LanguageId = models.ForeignKey(Languages, on_delete=models.CASCADE, blank=False, null=False)
