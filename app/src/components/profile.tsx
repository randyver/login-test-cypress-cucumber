'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof ProfileSchema>;

const ProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(ProfileSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSuccessMessage("Profile updated successfully!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-md">
        <Card className="border border-gray-300 shadow-lg">
          <CardHeader><CardTitle className="text-center text-2xl font-bold">Profile</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1">Name</label>
                <Input
                  id="name"
                  {...register('name')}
                  className="border border-black text-black"
                  placeholder="Name"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">Email</label>
                <Input
                  id="email"
                  {...register('email')}
                  className="border border-black text-black"
                  placeholder="Email"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <Button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Update Profile</Button>
              {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProfilePage;
