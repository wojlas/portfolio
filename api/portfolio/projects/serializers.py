from rest_framework import serializers

from projects.models import Projects
from portfolio_api.serializers import LanguagesSerializer, FrameworksSerializer


class ProjectsListSerializer(serializers.ModelSerializer):
  # serialize projects list without details

  language = LanguagesSerializer(many=True, read_only=True)
  framework = FrameworksSerializer(many=True, read_only=True)

  class Meta:
    model = Projects
    fields = ('id', 'name', 'language', 'framework')

  def get_language(self, obj):
    languages = obj.language.all()
    return LanguagesSerializer(languages, many=True, read_only=True).data
  
  def get_framework(self, obj):
    framework = obj.frameworks.all()
    return FrameworksSerializer(framework, many=True, read_only=True).data
  
  def to_representation(self, instance):
    representation = super().to_representation(instance)
    
    if 'language' in representation:
      for language in representation['language']:
        del language['is_frontend']
    
    if 'framework' in representation:
      for framework in representation['framework']:
        del framework['languages']

    return representation

class ProjectDetailsSerializer(serializers.ModelSerializer):
  # serialize project details
  
  language = LanguagesSerializer(many=True, read_only=True)
  framework = FrameworksSerializer(many=True, read_only=True)

  class Meta:
    model = Projects
    fields = '__all__'

  def get_language(self, obj):
    languages = obj.language.all()
    return LanguagesSerializer(languages, many=True, read_only=True).data
  
  def get_framework(self, obj):
    framework = obj.frameworks.all()
    return FrameworksSerializer(framework, many=True, read_only=True).data
  