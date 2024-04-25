from rest_framework import serializers
from .models import User, Category, Film, Reviews, UserLibrary, UserReviews, FilmCategory


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'

    def create(self, validated_data):
        return Film.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.release_year = validated_data.get('release_year', instance.release_year)
        instance.description = validated_data.get('description', instance.description)
        instance.director = validated_data.get('director', instance.director)
        instance.duration = validated_data.get('duration', instance.duration)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.poster = validated_data.get('poster', instance.poster)
        instance.category.set(validated_data.get('category', instance.category.all()))
        instance.save()
        return instance
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

class FilmCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FilmCategory
        fields = '__all__'

    def create(self, validated_data):
        return FilmCategory.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.film = validated_data.get('film', instance.film)
        instance.category = validated_data.get('category', instance.category)
        instance.save()
        return instance

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'

    def create(self, validated_data):
        return Reviews.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.film = validated_data.get('film', instance.film)
        instance.description = validated_data.get('description', instance.description)
        instance.creation_date = validated_data.get('creation_date', instance.creation_date)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        return User.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.password = validated_data.get('password', instance.password)
        instance.registration_date = validated_data.get('registration_date', instance.registration_date)
        instance.save()
        return instance

class UserLibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLibrary
        fields = '__all__'

    def create(self, validated_data):
        return UserLibrary.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.film = validated_data.get('film', instance.film)
        instance.save()
        return instance

class UserReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserReviews
        fields = '__all__'

    def create(self, validated_data):
        return UserReviews.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.review = validated_data.get('review', instance.review)
        instance.save()
        return instance
    
