import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      {/* Hero Section */}
      <header className="text-center space-y-4">
        <Image src="/logo.svg" alt="Task Manager Logo" width={120} height={120} />
        <h1 className="text-3xl sm:text-5xl font-bold">Boost Your Productivity</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Manage your tasks effortlessly with AI-powered insights.
        </p>
      </header>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <Link href="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Get Started
          </button>
        </Link>
      </div>

      {/* Feature Highlights */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Smart Task Organization</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Categorize and prioritize tasks easily.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Get productivity tips based on your workflow.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Real-Time Collaboration</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Work with your team seamlessly.
          </p>
        </div>
      </section>
    </div>
  );
}
