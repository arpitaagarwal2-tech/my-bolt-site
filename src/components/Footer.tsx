import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Top content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Logo + text */}
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <img
                src="/logo-white.png"
                alt="Bright Ledger Solutions"
                className="h-10 w-auto"
              />
              <span className="text-base font-semibold text-white">
                Bright Ledger Solutions
              </span>
            </div>
            <p className="text-sm max-w-md">
              Reliable, Accurate and Stress-Free Accounting for Small and Mid-Sized Businesses.
            </p>
          </div>

          {/* Policy links */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>

            {/* Optional: add later when page exists */}
            {/*
            <Link
              to="/cookie-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
            */}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-4 border-t border-slate-800 pt-3 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <span>© {currentYear} Bright Ledger Solutions. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
