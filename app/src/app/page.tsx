import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!!</h1>
        <p className="text-lg mb-8">This is a test page using Cypress and Cucumber</p>
        
        <div className="flex gap-4">
          <Link href="/login ">
            <p className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-200">Go to Login</p>
          </Link>
          <Link href="/search">
            <p className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition duration-200">Go to Search</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
