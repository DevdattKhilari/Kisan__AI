import { Review } from '../types';

const API_URL = 'http://localhost:5000/api';

// export async function getReviews(): Promise<Review[]> {
//   try {
//     const response = await fetch(`${API_URL}/reviews`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch reviews');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     throw error;
//   }
// }


export async function getReviews(): Promise<Review[]> {
  try {
    const response = await fetch(`${API_URL}/reviews`);
    console.log('Fetching reviews, Status:', response.status);
    if (!response.ok) {
      throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}

export async function addReview(reviewData: Omit<Review, 'id'>): Promise<Review> {
  try {
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add review');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
}