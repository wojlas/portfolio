from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.utils.decorators import method_decorator
from django.views.decorators.vary import vary_on_cookie
from django.views.decorators.cache import cache_page

from portfolio_api.models import Frameworks, Wording, Languages, AboutMeModel
from portfolio_api.serializers import AboutMeSerializer, FrameworksSerializer, LanguagesSerializer, SnippetSerializer

class WordingsView(APIView):
  # get snippets in selected language

  def get(self, request, lang):
    if lang == 'en':
      lang = 'eng'

    if lang not in ['pl', 'eng']:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    try: 
      snippets = Wording.objects.all()
      serializer = SnippetSerializer(snippets, many=True)
      response_obj = {}

      for snippet in serializer.data:
        response_obj[snippet['key']] = snippet[f'lang_{lang}']

      return Response(data=response_obj, status=status.HTTP_200_OK)

    except Wording.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LanguagesView(APIView):
  # get list of all languages

  @method_decorator(cache_page(3600))
  @method_decorator(vary_on_cookie)
  def get(self, request):
    try: 
      languages = Languages.objects.all()
      serializer = LanguagesSerializer(languages, many=True)
      
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    except Languages.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class FrameworksView(APIView):
  # get list of all frameworks

  @method_decorator(cache_page(3600))
  @method_decorator(vary_on_cookie)
  def get(self, request):
    try: 
      frameworks = Frameworks.objects.all().prefetch_related('languages')
      serializer = FrameworksSerializer(frameworks, many=True)
      
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    except Languages.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class AboutView(APIView):
  # get method for about me view

  @method_decorator(cache_page(3600))
  @method_decorator(vary_on_cookie)
  def get(self, request, lang):
    if lang == 'en':
      lang = 'eng'

    if lang not in ['pl', 'eng']:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    try:
      info = AboutMeModel.objects.all()

      if info == None:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

      serializer = AboutMeSerializer(info, many=True)
      serializer_result = serializer.data[0]
      
      result = { 'data': serializer_result['about_en'] if lang == 'eng' else serializer_result['about_pl'] }
    
      return Response(status=status.HTTP_200_OK, data=result)
    except AboutMeModel.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

