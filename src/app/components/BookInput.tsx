import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function BookInput({ onSubmit }) {
  const [book1, setBook1] = useState('');
  const [book2, setBook2] = useState('');
  const [book3, setBook3] = useState('');

  const handleSubmit = () => {
    const titles = [book1, book2, book3].filter(Boolean); // Filtra entradas vacías
    onSubmit(titles);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Book Titles</CardTitle>
        <CardDescription>Enter the titles of up to 3 books.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="book1">Book 1</Label>
          <Input id="book1" value={book1} onChange={(e) => setBook1(e.target.value)} placeholder="Enter book title (optional)" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book2">Book 2</Label>
          <Input id="book2" value={book2} onChange={(e) => setBook2(e.target.value)} placeholder="Enter book title (optional)" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book3">Book 3</Label>
          <Input id="book3" value={book3} onChange={(e) => setBook3(e.target.value)} placeholder="Enter book title (optional)" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
}