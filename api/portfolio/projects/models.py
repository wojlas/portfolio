from django.db import models

# from portfolio.portfolio_api.models import Frameworks, Languages

class Projects(models.Model):
  # my projects list
  class Meta:
        verbose_name_plural = 'Projects'

  name = models.CharField(max_length=64, blank=False, null=False)
  language = models.ManyToManyField('portfolio_api.Languages', through='ProjectLanguages', blank=False)
  framework = models.ManyToManyField('portfolio_api.Frameworks', through='ProjectFrameworks', blank=False)
  release_date = models.DateField(null=True, blank=True)
  repository_link = models.URLField(null=True, blank=True)
  description_pl = models.TextField(null=True, blank=True)
  description_en = models.TextField(null=True, blank=True)

  def __str__(self):
    return f'{self.name}'

class ProjectLanguages(models.Model):
  # many to many sub table between projects and languages

  project = models.ForeignKey(Projects, on_delete=models.CASCADE)
  languages = models.ForeignKey('portfolio_api.Languages', on_delete=models.CASCADE)

class ProjectFrameworks(models.Model):
  #many to many sub table between projects and frameworks

  project = models.ForeignKey(Projects, on_delete=models.CASCADE)
  frameworks = models.ForeignKey('portfolio_api.Frameworks', on_delete=models.CASCADE)