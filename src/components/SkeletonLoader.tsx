import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoaderProps {
  type?: "card" | "text" | "project" | "blog";
  count?: number;
}

const SkeletonLoader = ({ type = "card", count = 3 }: SkeletonLoaderProps) => {
  if (type === "project" || type === "blog") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="glass rounded-xl overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-6 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="space-y-3">
        {[...Array(count)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {[...Array(count)].map((_, i) => (
        <Skeleton key={i} className="h-24 w-full rounded-lg" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
