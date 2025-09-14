'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Get started with a free consultation and discover how we can optimize 
            your supply chain operations for maximum efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 group"
            >
              <Link href="/contact#quote" className="flex items-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-primary hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-5 w-5 text-primary-foreground/70" />
              <span className="text-primary-foreground/90">Call us: +231 777 550 506</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="h-5 w-5 text-primary-foreground/70" />
              <span className="text-primary-foreground/90">Email: info@rejoicelogistic.com</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}