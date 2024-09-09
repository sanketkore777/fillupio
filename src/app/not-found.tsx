import Link from "next/link";
import { Image } from "@nextui-org/react";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <span className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
            Return to Home
          </span>
        </Link>
      </div>
      <div className="mt-10">
        <Image
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          className="max-w-xs mx-auto"
        />
      </div>
    </div>
  );
}
