from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import Film
from .models import Category
from .models import Reviews
from .models import User
from .models import FilmCategory

'''
def serialize_film(films: Film):
    json_data = {}
    json_data['name'] = films.name
    json_data['release_year'] = films.release_year
    json_data['description'] = films.description
    json_data['director'] = films.director
    json_data['duration'] = films.duration
    json_data['rating'] = films.rating
    json_data['poster'] = films.poster
    json_data['category'] = films.category

    return json_data

def serialize_film_list(film: list[Film ]):
    return list(map(serialize_film , film))
#
def serialize_filmcategory(fc: FilmCategory):
    json_data = {}
    json_data['film'] = fc.film
    json_data['category'] = fc.category

    return json_data

def serialize_filmcategory_list(fc: list[FilmCategory]):
    return list(map(serialize_filmcategory, fc))
#
def serialize_reviews(reviews: Reviews):
    json_data = {}
    json_data['user'] = reviews.user
    json_data['film'] = reviews.film
    json_data['description'] = reviews.description
    json_data['creation_date'] = reviews.creation_date

    return json_data

def serialize_reviews_list(reviews: list[Reviews]):
    return list(map(serialize_reviews, reviews))
#
def serialize_user(users: User):
    json_data = {}
    json_data['name'] = users.name
    json_data['email'] = users.email
    json_data['password'] = users.password
    json_data['registratio_date'] = users.registration_date
    json_data['status'] = users.status

    return json_data

def serialize_user_list(users: list[User]):
    return list(map(serialize_user, users))

'''
