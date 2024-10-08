from django.db import models
from uuid import uuid4


class Note(models.Model):
    slug = models.SlugField(max_length=200, unique=True, default=uuid4)
    title = models.CharField(max_length=200, default="")
    description = models.TextField(default="")

    def __str__(self):
        return self.title
