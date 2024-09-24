"use client"

import { motion } from "framer-motion";

interface Loader{
  children: React.ReactNode;

}



export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-16 h-16 rounded-full bg-blue-600" 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 0 15px #4c1d95, 0 0 30px #4c1d95, 0 0 45px #4c1d95, 0 0 60px #4c1d95",
          filter: "brightness(1.5) contrast(1.2)"
        }}
      />
    </div>
  )
}