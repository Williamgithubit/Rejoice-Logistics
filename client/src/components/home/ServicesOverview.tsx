'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Truck, Package, Plane, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServicesOverview() {
  const services = [
    {
      icon: Plane,
      title: 'Freight Forwarding',
      description: 'International air and sea freight solutions with competitive rates and reliable delivery.',
      features: ['Air & Sea Freight', 'Door-to-Door Service', 'Customs Documentation']
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage facilities with inventory management and distribution services.',
      features: ['Climate Control', 'Inventory Management', 'Pick & Pack Services']
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Local and long-haul transportation services with real-time tracking capabilities.',
      features: ['Real-time Tracking', 'Fleet Management', 'Last-mile Delivery']
    },
    {
      icon: Shield,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage services to ensure smooth import and export processes.',
      features: ['Duty Calculation', 'Documentation', 'Compliance Support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From freight forwarding to final delivery, we provide end-to-end logistics solutions 
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose Rejoice Logistic?
              </h3>
              <p className="text-gray-600 mb-6">
                With years of experience and a commitment to excellence, we deliver 
                logistics solutions that drive your business forward.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: '24/7 Customer Support' },
                  { icon: MapPin, text: 'Global Network Coverage' },
                  { icon: Shield, text: 'Secure & Reliable' },
                  { icon: Truck, text: 'Real-time Tracking' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}