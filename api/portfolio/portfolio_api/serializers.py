from rest_framework import serializers

from portfolio_api.models import AboutMeModel, Languages, Wording, Frameworks

class SnippetSerializer(serializers.ModelSerializer):
  # serialize snippets from model

  class Meta:
    model = Wording
    fields = ('key', 'lang_pl', 'lang_eng')


class LanguagesSerializer(serializers.ModelSerializer):
  # serialize languages list

  class Meta:
    model = Languages
    fields = ['id', 'name', 'is_frontend']

class FrameworksSerializer(serializers.ModelSerializer):
  # serialize frameworks list

  languages = LanguagesSerializer(many=True, read_only=True)

  class Meta:
    model = Frameworks
    fields = ['id', 'name', 'languages']

  def get_languages(self, obj):
    languages = obj.languages.all()
    return LanguagesSerializer(languages, many=True, read_only=True).data
  
  def to_representation(self, instance):
    representation = super().to_representation(instance)

    if 'languages' in representation:
      for language in representation['languages']:
        if 'is_frontend' in language:
          del language['is_frontend']
    
    return representation
  
class AboutMeSerializer(serializers.ModelSerializer):
  # serialize about me

  class Meta:
    model = AboutMeModel
    fields = ['about_pl', 'about_en']
  
