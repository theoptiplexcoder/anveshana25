# from django.db import models
# import uuid
# # Create your models here.


# class Dictionary(models.Model):
#     name=models.CharField(max_length=50)

# class Assessment(models.Model):
#     id=uuid.uuid4()
#     userId=models.CharField(max_length=300)
#     user=models.ForeignKey(User,on_delete=models.CASCADE)
#     quizScore=models.FloatField()
#     questions=models.ForeignKey(Dictionary,db_index=True)
#     category=[]
#     improvementTip=models.TextField()
#     createdAt=models.DateField(auto_now=True)
#     updatedAt=models.DateTimeField(auto_now_add=True)


# class IndustryInsights(models.Model):
#     id=uuid.uuid1()
#     industry=models.CharField(unique=True)
#     user=models.ForeignKey(User,on_delete=models.CASCADE)


# class User(models.Model):
#     id=uuid.uuid4()
#     clerkUserId=models.CharField(unique=True)
#     email=models.EmailField(unique=True)
#     name=models.CharField(max_length=200)
#     image=models.ImageField(upload_to='uploads/user')
#     industry=models.CharField(max_length=300)
#     bio=models.CharField(max_length=200)
#     experience=models.IntegerField(default=0)
#     skills=models.CharField(max_length=50000)
#     assessments=models.ForeignKey(Assessment,on_delete=models.CASCADE)
#     resume=models.ForeignKey(Resume,on_delete=models.CASCADE)



