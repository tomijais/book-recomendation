import React from 'react';
import BookCard from './BookCard';

const BookRecommendations = ({ recommendations, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Recommendations</h2>
      <ul>
        {recommendations.length > 0 &&
          recommendations.map((recommendation, index) => (
            <li key={index}>
              <BookCard author={recommendation.author} description={recommendation.description} rating={recommendation.rating} book={recommendation.book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookRecommendations;