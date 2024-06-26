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
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'release_year': self.release_year,
            'description': self.description,
            'director': self.director,
            'duration': self.duration,
            'rating': self.rating,
            'poster': self.poster,
            'category': self.category,
        }

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class FilmCategory(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('film', 'category'),)

    def __str__(self):
        return f'{self.film} - {self.category}'
   
    def to_json(self):
        return {
            'id': self.id,
            'film': self.film,
            'category': self.category,
        }
    class Meta:
        unique_together = ['film', 'category']

class User(models.Model):
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=35)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.password,
            'registration_date': self.registration_date,
        }
class Reviews(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    description = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description
    
    def to_json(self):
        return {
            'id': self.id,
            'user': self.name,
            'film': self.film,
            'description': self.description,
            'creation_date': self.creation_date,

        }
    

class UserLibrary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} - {self.film}'
        
    def to_json(self):
        return {
            'id': self.id,
            'user': self.user,
            'film': self.film,
        }
    class Meta:
        unique_together = ['user', 'film']

class UserReviews(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Reviews, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} - {self.review}'
    
    def to_json(self):
        return {
            'id': self.id,
            'user': self.user,
            'review': self.review,
        }
    class Meta:
        unique_together = ['user', 'review']
