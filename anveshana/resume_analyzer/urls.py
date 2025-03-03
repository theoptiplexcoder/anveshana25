from django.urls import path

from . import views


urlpatterns=[
        path("api/jobs",views.JobDescriptionView.as_view(),name="jobs"),
        path("api/resume",views.ResumeUploadView.as_view(),name="resume")
]

