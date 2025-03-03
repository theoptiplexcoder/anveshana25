from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ValidationError
from django.shortcuts import render
from .models import JobDescription,Resume
from .serializer import JobDescriptionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

from .analyzer import process_resume

# Create your views here.

class JobDescriptionView(APIView):
    def get(self,request,format=None):
        serializer=JobDescription.objects.all()
        serializer=JobDescriptionSerializer(serializer,many=True)
        return Response(serializer.data)



class ResumeUploadView(APIView):   
    def post(self,request,format=None):
        _data=request.data.dict()
        if 'resume' not in request.FILES:
            return Response({
                'status':False,
                'message':'Please upload resume',
                data:{}
            })
        if 'job_description' not in request.data.keys():
            return Response({
                'status':False,
                'message':'Please specify the job description',
                data:{}
            })
        job_description=_data['job_description']
        pdf=Resume(file=request.FILES['resume'])
        pdf.save()
        resume_path=pdf.file.path
        data=process_resume(resume_path,job_description)
        return Response({
            'status':True,
            'message':'Analyzed Successfully',
            'data':data
        })


        
