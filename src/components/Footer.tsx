import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto print:hidden">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-500 text-sm"
          >
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-400 hover:text-gray-500 text-sm"
          >
            How it Works
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-gray-500 text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-gray-500 text-sm"
          >
            Terms of Use
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ImportEspana. All rights reserved.
            KHIMSHO LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};
