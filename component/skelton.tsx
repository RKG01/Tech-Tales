// components/ArticleSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleSkeleton() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
      <Skeleton className="h-6 w-2/3" /> {/* Title */}
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-32" /> {/* Author */}
      <Skeleton className="h-3 w-24" /> {/* Date */}
    </div>
  );
}
