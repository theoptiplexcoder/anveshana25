from rest_framework import serializers
from .models import *



class JobDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobDescription
        fields='__all__'
