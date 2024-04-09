from django.db import models



class Film(models.Model):
    name = models.CharField(max_length=20)
    release_year = models.IntegerField()
    description = models.TextField()
    director = models.CharField(max_length=35)
    duration = models.IntegerField()
    rating = models.FloatField()
    poster = models.ImageField()
    category = models.ManyToManyField('Category', through='FilmCategory')

    def __str__(self):
        return self.name 

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class FilmCategory(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('film', 'category'),)

    def __str__(self):
        return f'{self.film} - {self.category}'


class User(models.Model):
    STATUS_CHOICES = [
        ('admin', 'Администратор'),
        ('user', 'Обычный пользователь'),
    ]
    
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=35)
    registration_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=35, choices=STATUS_CHOICES)

    def __str__(self):
        return self.name 

class Reviews(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    film = models.ForeignKey('Film', on_delete=models.CASCADE)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description
