'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Target, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: Target,
    title: 'Mission Focused',
    description: 'Dedicated to delivering excellence in every shipment'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Professional logistics specialists at your service'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your cargo is safe with our advanced security measures'
  }
];

const benefits = [
  'Real-time tracking and monitoring',
  'Competitive pricing and transparent costs',
  'Global network with local expertise',
  'Custom solutions for your business needs',
  '24/7 customer support and assistance',
  'Eco-friendly and sustainable practices'
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Rejoice Logistics
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World Leading <span className="text-primary">Logistics</span> Company
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              With over 15 years of experience in the logistics industry, we have established ourselves as a trusted partner for businesses worldwide. Our commitment to excellence and innovation drives us to deliver superior logistics solutions.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="px-8 py-4 h-auto">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Logistics Operations"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-primary rounded-2xl p-6 text-white shadow-2xl max-w-xs"
              >
                <h4 className="text-lg font-bold mb-2">Why Choose Us?</h4>
                <p className="text-primary-foreground/90 text-sm">
                  We deliver exceptional logistics solutions with unmatched reliability and customer service excellence.
                </p>
              </motion.div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{feature.title}</h5>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
