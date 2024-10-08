from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for viewing and editing notes.
    """

    queryset = Note.objects.all()  # This helps DRF with router configuration

    def list(self, request):
        queryset = Note.objects.all()
        serializer = NoteSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            note = Note.objects.get(pk=pk)
            serializer = NoteSerializer(note)
            return Response(serializer.data)
        except Note.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        try:
            note = Note.objects.get(pk=pk)
            serializer = NoteSerializer(note, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Note.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def partial_update(self, request, pk=None):
        try:
            note = Note.objects.get(pk=pk)
            serializer = NoteSerializer(note, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Note.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        try:
            note = Note.objects.get(pk=pk)
            note.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Note.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
