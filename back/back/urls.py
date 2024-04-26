"""
URL configuration for back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.db import router
from django.urls import include, path
from app import views
import authentication.urls


urlpatterns = [
    path('admin/', admin.site.urls),
 
    # Film URLs
    path('films/', views.film_view, name='film-list'),
    path('films/<int:film_id>/', views.film_view, name='film-detail'),

    # Category URLs
    path('categories/', views.category_view, name='category-list'),
    path('categories/<int:category_id>/', views.category_view, name='category-detail'),

    # Film Category URLs
    path('film-categories/', views.film_category_view, name='film-categories-list'),

    # Reviews URLs
    path('reviews/', views.reviews_view, name='reviews-list'),

    # User URLs
    path('users/', views.user_view, name='users-list'),

    # User Library URLs
    path('user-library/', views.user_library_view, name='user-library-list'),
    
    # User Reviews URLs
    path('user-reviews/', views.user_reviews_view, name='user-reviews-list'),
    
    path("authentication/", include("authentication.urls"))
]