"use client";

import { useEffect, useState } from "react";
import ArticleSkeleton from "@/component/skelton";

type Article = {
  id: number;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
};

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 All Articles</h1>

      {loading ? (
        <ul className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <ArticleSkeleton key={i} />
          ))}
        </ul>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.id} className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 line-clamp-3">{article.content}</p>
              <div className="text-sm text-gray-500 mt-2">
                ✍️ Author:{" "}
                <span className="font-medium">{article.authorId}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                🗓️ {new Date(article.createdAt).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
