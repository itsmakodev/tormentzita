"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold text-red-600">Algo salió mal 😢</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600"
      >
        Reintentar
      </button>
    </div>
  );
}
