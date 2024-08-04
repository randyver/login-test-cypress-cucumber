'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define zod schema
const SearchSchema = z.object({
  query: z.string().min(1, "Search query is required"),
});

type FormValues = z.infer<typeof SearchSchema>;

// Predefined list of fruits
const fruits = [
  { title: 'Banana' },
  { title: 'Apple' },
  { title: 'Strawberry' },
  { title: 'Orange' },
  { title: 'Pineapple' },
  { title: 'Grapes' },
  { title: 'Mango' },
  { title: 'Blueberry' },
  { title: 'Watermelon' },
  { title: 'Peach' },
];

const SearchPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(SearchSchema),
  });

  const [results, setResults] = useState<{ title: string }[]>(fruits);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSearchPerformed(true);
    const filteredResults = fruits.filter(fruit =>
      fruit.title.toLowerCase().includes(data.query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-4 w-full max-w-md">
        <Input
          {...register('query')}
          type="text"
          placeholder="Search fruits..."
          className="border border-black text-black p-2"
          data-testid="search-input"
        />
        {errors.query && <span className="text-red-500">{errors.query.message}</span>}
        <Button type="submit" className="bg-orange-600 text-white p-2" data-testid="search-button">Search</Button>
      </form>

      <div className="w-full max-w-md flex flex-col gap-4">
        {searchPerformed && results.length === 0 ? (
          <p className="text-center text-red-500">Fruit not found</p>
        ) : (
          results.map((result, index) => (
            <Card key={index} className="w-full border border-gray-300 shadow-lg">
              <CardHeader><CardTitle className="text-lg font-bold">{result.title}</CardTitle></CardHeader>
              <CardContent>
                {/* Additional content for each fruit can go here */}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
