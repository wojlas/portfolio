from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from django.utils.decorators import method_decorator

from projects.models import Projects
from projects.serializers import ProjectsListSerializer, ProjectDetailsSerializer

class ProjectsView(APIView):
  # get list of projects with basic information's

  @method_decorator(cache_page(3600))
  @method_decorator(vary_on_cookie)
  def get(self, request):
    try:
      projects = Projects.objects.all()
      serializer = ProjectsListSerializer(projects, many=True)

      return Response(status=status.HTTP_200_OK, data=serializer.data)
    except Projects.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class ProjectDetailsView(APIView):
  # details of specific project

  def get(self, request, id):
    try:
      project = Projects.objects.get(id=id)

      if (project == None):
        return Response(status=status.HTTP_404_NOT_FOUND_)
      
      serializer = ProjectDetailsSerializer(project, many=False)

      return Response(status=status.HTTP_200_OK, data=serializer.data)
    except Projects.DoesNotExist:
      return Response(status=status.HTTP_500_INTERNAL_SERVER_)
