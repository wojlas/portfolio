from rest_framework import serializers

from portfolio_api.models import Wording

class SnippetSerializer(serializers.ModelSerializer):
  # serialize snippets from model

  class Meta:
    model = Wording
    fields = ('key', 'lang_pl', 'lang_eng')
