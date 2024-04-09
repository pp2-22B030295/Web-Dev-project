from django.contrib import admin

from .models import FilmCategory
from .models import Category
from .models import Film
from .models import Reviews
from .models import User

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin): 
    list_display = ('id' ,'name')   

@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('id' ,'name', 'release_year', 'description', 'director' , 'duration' , 'rating', 'poster')

@admin.register(Reviews)
class ReviewsAdmin(admin.ModelAdmin): 
    list_display = ('id' ,'user', 'film', 'description', 'creation_date',)   

@admin.register(User)
class UserAdmin(admin.ModelAdmin): 
    list_display = ('id' ,'name', 'password', 'registration_date', 'status')   

@admin.register(FilmCategory)
class FilmCategoryAdmin(admin.ModelAdmin): 
    list_display = ('id' ,'film', 'category')   

