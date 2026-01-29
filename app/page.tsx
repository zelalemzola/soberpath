import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black">
            SoberPath
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Take control of your drinking with our personalized quiz and custom
            plan.
          </p>
          <Link
            href="/quiz"
            className="flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-green-600 px-8 text-white font-medium transition-colors hover:bg-green-700"
          >
            Start Quiz
          </Link>
        </div>
      </main>
    </div>
  );
}
