from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from portfolio_api.models import Frameworks, Wording, Languages
from portfolio_api.serializers import FrameworksSerializer, LanguagesSerializer, SnippetSerializer

class WordingsView(APIView):
  # get snippets in selected language

  def get(self, request, lang):
    if lang not in ['pl', 'eng']:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    try: 
      snippets = Wording.objects.all()
      serializer = SnippetSerializer(snippets, many=True)
      response_obj = []

      for snippet in serializer.data:
        response_obj.append({
          snippet['key']: snippet[f'lang_{lang}']
        })

      return Response(data=response_obj, status=status.HTTP_200_OK)

    except Wording.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LanguagesView(APIView):
  # get list of all languages

  def get(self, request):
    try: 
      languages = Languages.objects.all()
      serializer = LanguagesSerializer(languages, many=True)
      
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    except Languages.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class FrameworksView(APIView):
  # get list of all frameworks

  def get(self, request):
    try: 
      frameworks = Frameworks.objects.all().prefetch_related('languages')
      serializer = FrameworksSerializer(frameworks, many=True)
      
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    except Languages.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class AboutView(APIView):
  # get method for about me view

  def get(self, request, lang):
    if lang not in ['pl', 'eng']:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    resp_message = {}

    if (lang == 'eng'):
      resp_message['message'] = 'about me will be available soon...'
    else:
      resp_message['message'] = 'informacje \'o mnie\' będą dostępne wkrótce...'
    
    return Response(status=status.HTTP_200_OK, data=resp_message)

