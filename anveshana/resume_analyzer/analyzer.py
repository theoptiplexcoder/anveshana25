import pdfplumber
from mistralai import Mistral
from dotenv import load_dotenv
import os,json

from .models import JobDescription


#load .env
load_dotenv()

MISTRAL_API=os.getenv('MISTRAL_API_KEY')

def resume_extractor(pdf_path):
    text=""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text+=page.extract_text()+'\n'
    return text


def resume_analyzer_with_llm(resume,job_description)->dict:
    prompt=f"""
    You are an AI bot which will help humans analyze their resume based on the latest job descriptions required for a specific role and analyze the following details given their resume and job_description of a job. You should be able to extract the following details:
    1. Identify all skills mentioned in the resume
    2. Calculate the total number of years of experience
    3. Categorise the projects in the resume based on their domains (Ex: Web development, AI engineer, data science, Machine Learning etc...)
    4. Grade the resume based on the job description ranging from 0 to be the least and 100 to be the best score for the best resume

    resume:{resume}
    Job Description:{job_description}

    Provide the output in the form of JSON in the following structure:
    {{
        "rank":<percentage>,
        "skills":[skill1,skill2,......],
        "total_experience":<Number of years>,
        "project_categories":[caregory1,category2,category3,.....],
    }}
    """

    try:
        client=Mistral(api_key=MISTRAL_API)
        model="mistral-large-latest"
        chat_response=client.chat.complete(
                model=model,
                messages=[
                    {
                        "role":"user",
                        "content":prompt,
                        
                        },
                        
                    ],
                )
        print(chat_response.choices[0].message.content)
    except Exception as e:
        print(e)

def process_resume(pdf_path,job_desription):
    resume=resume_extractor(pdf_path)
    job_desription=JobDescription.objects.get(id=job_desription).description
    result=resume_analyzer_with_llm(resume,job_desription)
    return result

