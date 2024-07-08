"use client"
import { useState } from "react";
import BookInput from "./components/BookInput";
import BookRecommendations from "./components/BookRecomendation";

export default function Home() {

  const [bookTitles, setBookTitles] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBookSubmit = async (titles) => {
    setLoading(true);

    try {
      const response = await fetch('/api/fetchHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booksNames: { titles },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching book recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

    
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm space-y-8">
        <BookInput onSubmit={handleBookSubmit} />
        <BookRecommendations 
          recommendations={recommendations} 
          loading={loading} 
        />
      </div>
    </main>
  );
}
