"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilLine } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      scale: [1, 1.015, 1],
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [title, content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/create-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        setTitle("");
        setContent("");
        alert("✅ Article Published!");
      } else {
        alert("❌ Error publishing article");
      }
    } catch (err) {
      console.error("Failed to publish article:", err);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <SignedIn>
        <motion.div animate={controls}>
          <Card className="bg-black border border-white/10 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-red-500">
                <PencilLine className="w-6 h-6" /> Write a New Article
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold mb-1">
                    📝 Title
                  </label>
                  <Input
                    id="title"
                    placeholder="e.g., Scaling React Apps"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-zinc-900 text-white placeholder-gray-500 border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-semibold mb-1">
                    🧠 Content
                  </label>
                  <Textarea
                    id="content"
                    placeholder="Write something amazing..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="bg-zinc-900 text-white placeholder-gray-500 border-white/10 min-h-[200px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  {loading ? "Publishing..." : "🚀 Publish Article"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </SignedIn>

      <SignedOut>
        <div className="text-center mt-20 text-white">
          <h2 className="text-2xl font-semibold mb-4">Please sign in to write articles</h2>
          <SignInButton>
            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </div>
  );
}
