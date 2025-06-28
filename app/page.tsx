// app/page.tsx
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
  return (
    <>
      <SignedIn>
        {/* ✅ If user is signed in, redirect to dashboard */}
        {redirect("/dashboard")}
      </SignedIn>

      <SignedOut>
        {/* ✅ If user is signed out, show landing */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
          <h1 className="text-4xl font-bold text-center mb-6">
            🧠 Welcome to ArticleHub
          </h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Write and publish your tech thoughts, guides, and articles.
            Sign in to get started!
          </p>
          <div className="flex gap-4">
            <SignInButton>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-50">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </main>
      </SignedOut>
    </>
  );
}
