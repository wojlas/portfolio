from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from portfolio_api.models import Wording
from portfolio_api.serializers import SnippetSerializer

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


    

