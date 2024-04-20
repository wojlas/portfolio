from django.db import models

class Wording(models.Model):
  # translations snippets for languages: PL and ENG

  class Meta:
    verbose_name = 'wording'
    verbose_name_plural = 'wording'
  
  key = models.CharField(max_length=64, blank=False, null=False)
  lang_pl = models.CharField(max_length=256, blank=False, null=False)
  lang_eng = models.CharField(max_length=256, blank=False, null=False)

  def __str__(self):
    return self.key

class Languages(models.Model):
  # list of all languages known by me 

  class Meta:
    verbose_name_plural = 'languages'

  name = models.CharField(max_length=64, blank=False, null=False)
  is_frontend = models.BooleanField(default=True)

  def __str__(self):
    return self.name

class Frameworks(models.Model):
  # list of all frameworks which I know

  class Meta:
    verbose_name_plural = 'frameworks'

  name = models.CharField(max_length=64, blank=False, null=False)
  languages = models.ManyToManyField(Languages, through='LanguagesFrameworks', blank=False)

  def __str__(self):
    return self.name
  
class LanguagesFrameworks(models.Model):
  # many to many sub table between languages and frameworks

  languages = models.ForeignKey(Languages, on_delete=models.CASCADE)
  frameworks = models.ForeignKey(Frameworks, on_delete=models.CASCADE)

class AboutMeModel(models.Model):
  """model for store informations about me
      I need this model to have an info in specific language without keeping everything on frontend side"""
  
  class Meta:
    verbose_name_plural = 'about'

  about_pl = models.TextField(null=False)
  about_en = models.TextField(null=False)

  def __str__(self):
    return 'Info'
  