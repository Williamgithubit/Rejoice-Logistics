'use client';

import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

interface LoadingProps {
  isVisible: boolean;
}

export function Loading({ isVisible }: LoadingProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Logo Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: 'easeOut'
          }}
        >
          {/* Logo Background Circle */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full shadow-2xl">
            <div className="bg-white p-6 rounded-full">
              <Truck className="h-12 w-12 md:h-16 md:w-16 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            ease: 'easeOut'
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Rejoice Logistic
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            Your Trusted Logistics Partner
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 0.8
          }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 md:w-3 md:h-3 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
