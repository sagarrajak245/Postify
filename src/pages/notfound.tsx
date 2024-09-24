



import { motion } from "framer-motion";
import Link from "next/link";

const NotFound:  React.FC=() =>{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <motion.h1 
        className="text-8xl sm:text-9xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600">
          404
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-xl sm:text-2xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link 
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:from-blue-600 hover:to-violet-700 transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full bg-gradient-to-r from-blue-500 to-violet-600"></div>
      </motion.div>
    </div>
  )
}
export default NotFound;