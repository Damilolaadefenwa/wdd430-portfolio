export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      {/* Placeholder for the page heading */}
      <div className="h-8 w-56 rounded bg-gray-200 dark:bg-gray-700 mb-6" />

      {/* Placeholders for the project cards */}
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-3">
          <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-3">
          <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}