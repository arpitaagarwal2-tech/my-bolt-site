// Remove unused imports if you are not using icons
// import { TrendingUp, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top grid section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo-white.png"
                alt="Bright Ledger Solutions"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">
                Bright Ledger Solutions
              </span>
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              Empowering businesses to achieve excellence in financial management.
            </p>
          </div>

          {/* OPTIONAL: you can add other columns here later */}
          {/* <div></div>
          <div></div> */}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Bright Ledger Solutions. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
