'use client';


import React, { useState, useEffect } from 'react';   
import { Star, Upload } from 'lucide-react';
import { Review } from '/types';
import { getReviews, addReview } from '../api/reviews';


function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
    longComment: ''
  });

  useEffect(() => {
    async function loadReviews() {
      try {
        const fetchedReviews = await getReviews();
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadReviews();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const reviewData = {
      name: reviewForm.name,
      role: 'Farmer',
      location: 'Unknown',
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      longComment: reviewForm.longComment,
      image: selectedImage || 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=200&auto=format&fit=crop',
      farmType: 'Mixed Crop Farming',
      date: new Date().toISOString().split('T')[0]
    };

    try {
      const newReview = await addReview(reviewData);
      if (newReview) {
        setReviews([newReview, ...reviews]);
        setReviewForm({ name: '', rating: 5, comment: '', longComment: '' });
        setSelectedImage(null);
        setContactOpen(false);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0c10] to-[#0a0c10]/90">
        <div className="text-emerald-400">Loading reviews...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#0a0c10] to-[#0a0c10]/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-4">
            Farmer Success Stories
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Read detailed experiences from farmers across India who have
            transformed their agricultural practices with Kisan AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0a0c10]/40 border border-white/10 p-8 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-emerald-200 font-semibold text-xl">
                      {review.name}
                    </h3>
                    <p className="text-gray-400">{review.role}</p>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                    <div className="flex mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-emerald-400 text-emerald-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <span className="text-emerald-400 text-sm">
                      {review.farmType}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    "{review.longComment || review.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="text-center mt-8">
          <button 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors"
            onClick={() => setContactOpen(true)}
          >
            Write Review
          </button>
        </div>

        {/* Review Form Dialog */}
        {contactOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Write a Review</h2>
                <p className="text-gray-600">Share your experience with Kisan AI.</p>
              </div>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                {/* Photo Upload Section */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Your Photo</label>
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 border-2 border-dashed border-gray-300 rounded-full overflow-hidden">
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Upload className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                        onClick={() => document.getElementById('photo-upload')?.click()}
                      >
                        Choose Photo
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className={`p-2 rounded-md ${
                          reviewForm.rating >= rating 
                            ? 'bg-yellow-400 text-white' 
                            : 'bg-gray-100 text-gray-400'
                        }`}
                        onClick={() => setReviewForm({ ...reviewForm, rating })}
                      >
                        <Star className={`w-4 h-4 ${reviewForm.rating >= rating ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Short Review</label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={2}
                    placeholder="Share your experience briefly"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Detailed Review</label>
                  <textarea
                    value={reviewForm.longComment}
                    onChange={(e) => setReviewForm({ ...reviewForm, longComment: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={4}
                    placeholder="Provide more details about your experience"
                    required
                  />
                </div>

                <div className="flex gap-2 justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;