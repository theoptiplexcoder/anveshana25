from django.db import models

# Create your models here.


class Resume(models.Model):
    file=models.FileField(upload_to="uploads/resume")
    name=models.CharField(max_length=200,default="xxxxxResume")

    def __str__(self):
        return self.name


class JobDescription(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()

    def __str__(self):
        return self.title
