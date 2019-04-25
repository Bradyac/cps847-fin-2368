from django.db import models

class SurveyQuestion(models.Model):
    respondent = models.CharField(max_length=100)
    counter = models.IntegerField(default=5)
