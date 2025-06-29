// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    // ✅ Redirect immediately on the server if signed in
    redirect("/dashboard");
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Gradient Loops */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse delay-200" />
      </div>

      {/* Hero Text */}
      <h1 className="text-5xl sm:text-6xl font-bold text-center text-gray-800 relative z-10 leading-tight">
        🧠 Welcome to <span className="text-indigo-600">ArticleHub</span>
      </h1>
      <p className="text-gray-600 mt-4 mb-10 text-center max-w-xl relative z-10 text-lg">
        The modern place to write, share, and discover amazing tech articles by developers like you.
      </p>

      {/* Sign in/up buttons */}
      <div className="flex gap-6 relative z-10">
        <SignInButton>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg px-6 py-3 rounded-full shadow-md transition-all">
            🚀 Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-medium text-lg px-6 py-3 rounded-full shadow-sm transition-all">
            ✍️ Sign Up
          </button>
        </SignUpButton>
      </div>

      {/* Feature loop */}
      <div className="mt-20 text-center relative z-10 animate-fade-in-up">
        <p className="text-gray-500 text-sm tracking-widest uppercase">Why ArticleHub?</p>
        <ul className="mt-4 space-y-2 text-gray-700 text-lg">
          <li>💡 Share your tech knowledge</li>
          <li>📢 Get discovered by other devs</li>
          <li>⚡ Instant publishing experience</li>
          <li>🔐 Auth powered by Clerk</li>
        </ul>
      </div>
    </main>
  );
}
