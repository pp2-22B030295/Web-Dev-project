from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FilmSerializer, CategorySerializer, ReviewsSerializer, UserLibrarySerializer, UserReviewsSerializer, UserSerializer
from .models import Film, Category, Reviews, User, UserLibrary, UserReviews

@api_view(["GET", "POST", "PUT", "DELETE"])
def film_view(request, film_id=None):
    if request.method == "GET":
        if film_id:
            film = get_object_or_404(Film, id=film_id)
            serializer = FilmSerializer(instance=film)
            return Response(serializer.data, status=status.HTTP_200_OK)
        films = Film.objects.all()
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if film_id:
            film = get_object_or_404(Film, id=film_id)
            serializer = FilmSerializer(instance=film, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if film_id:
            film = get_object_or_404(Film, id=film_id)
            film.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST", "PUT", "DELETE"])
def category_view(request, category_id=None):
    if request.method == "GET":
        if category_id:
            category = get_object_or_404(Category, id=category_id)
            serializer = CategorySerializer(instance=category)
            return Response(serializer.data, status=status.HTTP_200_OK)
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if category_id:
            category = get_object_or_404(Category, id=category_id)
            serializer = CategorySerializer(instance=category, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if category_id:
            category = get_object_or_404(Category, id=category_id)
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST", "PUT", "DELETE"])
def reviews_view(request, review_id=None):
    if request.method == "GET":
        if review_id:
            review = get_object_or_404(Reviews, id=review_id)
            serializer = ReviewsSerializer(instance=review)
            return Response(serializer.data, status=status.HTTP_200_OK)
        reviews = Reviews.objects.all()
        serializer = ReviewsSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = ReviewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if review_id:
            review = get_object_or_404(Reviews, id=review_id)
            serializer = ReviewsSerializer(instance=review, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if review_id:
            review = get_object_or_404(Reviews, id=review_id)
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "POST", "PUT", "DELETE"])
def user_view(request, user_id=None):
    if request.method == "GET":
        if user_id:
            user = get_object_or_404(User, id=user_id)
            serializer = UserSerializer(instance=user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if user_id:
            user = get_object_or_404(User, id=user_id)
            serializer = UserSerializer(instance=user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if user_id:
            user = get_object_or_404(User, id=user_id)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "POST", "PUT", "DELETE"])
def user_library_view(request, user_library_id=None):
    if request.method == "GET":
        if user_library_id:
            user_library = get_object_or_404(UserLibrary, id=user_library_id)
            serializer = UserLibrarySerializer(instance=user_library)
            return Response(serializer.data, status=status.HTTP_200_OK)
        user_libraries = UserLibrary.objects.all()
        serializer = UserLibrarySerializer(user_libraries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = UserLibrarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if user_library_id:
            user_library = get_object_or_404(UserLibrary, id=user_library_id)
            serializer = UserLibrarySerializer(instance=user_library, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if user_library_id:
            user_library = get_object_or_404(UserLibrary, id=user_library_id)
            user_library.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST", "PUT", "DELETE"])
def user_reviews_view(request, user_reviews_id=None):
    if request.method == "GET":
        if user_reviews_id:
            user_reviews = get_object_or_404(UserReviews, id=user_reviews_id)
            serializer = UserReviewsSerializer(instance=user_reviews)
            return Response(serializer.data, status=status.HTTP_200_OK)
        user_reviews_list = UserReviews.objects.all()
        serializer = UserReviewsSerializer(user_reviews_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = UserReviewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == "PUT":
        if user_reviews_id:
            user_reviews = get_object_or_404(UserReviews, id=user_reviews_id)
            serializer = UserReviewsSerializer(instance=user_reviews, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        if user_reviews_id:
            user_reviews = get_object_or_404(UserReviews, id=user_reviews_id)
            user_reviews.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "No id provided"}, status=status.HTTP_400_BAD_REQUEST)
