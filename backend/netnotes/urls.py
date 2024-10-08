from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from netnotes.notes.views import NoteViewSet

router = SimpleRouter()
router.register(r"notes", NoteViewSet, basename="note")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
