import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart2, Menu, Star, Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Img from "../assets/IMG_20220821_180601_.jpg";
import Footer from "./Footer";
import Header from "./Header";
import { CurrentCertificate } from "./currentcertificate";
import { NotificationCenter } from "./notification";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const SidebarButton: React.FC<{ icon: React.ReactNode; label: string; to: string }> = ({ icon, label, to }) => (
    <Link to={to} className="w-full">
      <Button variant="ghost" className="w-full justify-start gap-2 text-left">
        {icon}
        <span className="md:inline">{label}</span>
      </Button>
    </Link>
  );

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-stone-500 to-stone-600">
      <Header />
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-[64px] bottom-0 left-0 z-40 w-64 border-l-4 border-l-indigo-700 transform bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "md:relative md:translate-x-0 md:top-0"
          )}
        >
          <div className="flex h-full flex-col p-4">
            <Button
              variant="ghost"
              
              className="absolute right-2 top-2 md:hidden text-cyan-400"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </Button>
            <nav className="mt-8 space-y-2 center text-cyan-400">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16 md:h-20 md:w-20 ring-2 ring-blue-400">
                  <AvatarImage src={Img} alt="Admin" />
                  <AvatarFallback className="bg-gray-800 text-blue-400">AD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">sagar rajak</h3>
                  <p className="text-xs md:text-sm text-gray-400">Admin</p>
                </div>
              </div>
              <div className="flex flex-col my-5 pt-2 space-y-2">
                <SidebarButton icon={<Star size={24} />} label="Dashboard" to="/dashboard" />
                <SidebarButton icon={<Upload size={24} />} label="Past Uploaded Certificate" to="/pastuploads" />
                <SidebarButton icon={<BarChart2 size={24} />} label="Analytics" to="/analytics" />
              </div>
            </nav>
            <div className="mt-auto p-1">
              <NotificationCenter />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-2 sm:p-4 md:p-8 overflow-x-hidden">
          <Button
            variant="ghost"
            className="mb-4 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </Button>
          <div className="rounded-lg border-2 border-blue-700/100 text-cyan-400 bg-black bg-opacity-1 p-2 sm:p-4 md:p-6 shadow-lg backdrop-filter backdrop-blur-lg border-gray-800 elevation-12 overflow-x-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <div className="w-full overflow-x-auto">
        <CurrentCertificate />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;