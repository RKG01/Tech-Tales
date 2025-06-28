"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-indigo-600">
        🧠 ArticleHub
      </Link>

      <div className="flex items-center gap-4">
        <div>
          <Link href="/articles" className="hover:underline text-red-600 font-stretch-150% bg-black p-4 rounded-4xl font-bold">
            All Articles
          </Link>
        </div>
        <SignedOut>
          <SignInButton>
            <button className="text-sm px-4 py-2 rounded-xl font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-sm px-4 py-2 rounded-xl font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
