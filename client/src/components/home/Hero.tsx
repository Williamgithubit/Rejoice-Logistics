'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen mt-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Logistics Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-block bg-primary/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Trusted Logistics Partner
            </div>
            
            <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
              Transport Your
              <span className="text-primary block">Goods Around the</span>
              <span className="block">World</span>
            </h1>
            
            <p className="text-lg md:text-md mb-8 text-gray-300 max-w-2xl">
              We are the Top Freight and Logistics Company with over 15 years of experience in global shipping solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="text-lg px-8 py-4 h-auto">
                <Link href="/contact#quote">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 text-black py-4 h-auto border-white hover:bg-white hover:text-primary"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://www.tka.rs/wp-content/uploads/2024/08/Avio-kombinovan-TKA-.jpg"
                alt="Logistics Operations"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};