'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, MapPin, Clock, Shield, Route, Users, CheckCircle, ArrowRight, Navigation, Fuel } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TransportationPage() {
  const features = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Modern fleet of vehicles with GPS tracking and professional drivers.'
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Advanced route planning for efficient and cost-effective deliveries.'
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Reliable scheduling and time-sensitive delivery commitments.'
    },
    {
      icon: Shield,
      title: 'Cargo Security',
      description: 'Secure transportation with insurance coverage and safety protocols.'
    },
    {
      icon: Navigation,
      title: 'Real-time Tracking',
      description: 'Live GPS tracking and delivery updates throughout the journey.'
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Experienced, licensed drivers with excellent safety records.'
    }
  ];

  const services = [
    {
      title: 'Local Delivery',
      description: 'Same-day and next-day delivery services within the city and surrounding areas.',
      icon: Truck,
      features: ['Same-day delivery', 'Scheduled deliveries', 'Express service', 'Proof of delivery']
    },
    {
      title: 'Long-haul Transport',
      description: 'Interstate and cross-country transportation for large shipments and bulk cargo.',
      icon: Route,
      features: ['Interstate shipping', 'Bulk cargo transport', 'Dedicated routes', 'Flexible scheduling']
    },
    {
      title: 'Specialized Transport',
      description: 'Specialized vehicles for oversized, hazardous, or temperature-sensitive cargo.',
      icon: Shield,
      features: ['Refrigerated transport', 'Oversized cargo', 'Hazmat certified', 'Climate control']
    }
  ];

  const benefits = [
    'Competitive transportation rates and transparent pricing',
    'Flexible scheduling to meet your delivery requirements',
    'Professional drivers with excellent safety records',
    'Real-time tracking and delivery notifications',
    'Comprehensive insurance coverage for peace of mind',
    'Dedicated customer support throughout the journey'
  ];

  const stats = [
    { number: '500+', label: 'Vehicles in Fleet' },
    { number: '99.5%', label: 'On-time Delivery' },
    { number: '24/7', label: 'Dispatch Service' },
    { number: '50+', label: 'Cities Covered' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-2xl">
                <Truck className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transportation <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Reliable ground transportation services with modern fleet management, 
              real-time tracking, and professional drivers for all your delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact#quote">Get Transport Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule Pickup</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transportation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local deliveries to long-haul transport, we provide comprehensive 
              ground transportation services for all cargo types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Transportation?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With our modern fleet and experienced drivers, we ensure your cargo 
                reaches its destination safely, securely, and on time.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 group">
                  <Link href="/contact#quote" className="flex items-center">
                    Get Transport Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Transportation fleet"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Move Your Cargo?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get reliable transportation services with real-time tracking and 
              professional handling for your valuable cargo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact#quote">Request Quote</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Schedule Pickup</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
