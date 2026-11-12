export default function ProjectCardSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-3"
        >
          <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
}