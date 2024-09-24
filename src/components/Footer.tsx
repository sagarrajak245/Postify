import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavigationItem[] = [
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: <Youtube className="h-6 w-6" />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-violet-400 hover:text-pink-500 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0  ">
          <p className="text-center text-sm leading-5 text-slate-200  align-bottom  ">
            &copy; {new Date().getFullYear()} SRX Solutions, Inc. All rights reserved.
            <div>
            Design and Devloped by Sagar Rajak...
          </div>
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;