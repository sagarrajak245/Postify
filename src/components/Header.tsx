import { cn } from "@/lib/utils";
import React from "react";



interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        "bg-gray-900 shadow-md",
        "sticky top-0 z-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-b-amber-500">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo / Title Section */}
          <div className="flex-shrink-0">
            <h1 className="text-5xl sm:text-5xl font-bold text-transparent bg-clip-text animate-pulse bg-gradient-to-r from-cyan-500 to-cyan-200">
              Postify...
            </h1>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="https://portfolio-1-rho-one.vercel.app/"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

