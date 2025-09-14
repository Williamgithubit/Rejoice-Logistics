'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Package, Truck, Shield, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const services = [
    {
      id: 'freight',
      icon: Plane,
      title: 'Freight Forwarding',
      subtitle: 'Air & Sea Freight Solutions',
      description: 'Comprehensive international freight forwarding services with competitive rates, reliable transit times, and comprehensive tracking capabilities.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Air Freight: Express and standard air cargo services',
        'Sea Freight: FCL and LCL container shipping',
        'Door-to-Door Service: Complete logistics management',
        'Customs Documentation: Professional handling of all paperwork',
        'Real-time Tracking: Monitor your shipments 24/7',
        'Insurance Coverage: Comprehensive cargo protection'
      ],
      benefits: [
        'Competitive rates with major airlines and shipping lines',
        'Global network coverage across 50+ countries',
        'Dedicated account management',
        'Flexible pickup and delivery options'
      ]
    },
    {
      id: 'warehousing',
      icon: Package,
      title: 'Warehousing & Distribution',
      subtitle: 'Secure Storage Solutions',
      description: 'State-of-the-art warehouse facilities with advanced inventory management systems, climate control, and comprehensive distribution services.',
      image: 'https://images.pexels.com/photos/4481330/pexels-photo-4481330.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Climate-Controlled Storage: Temperature and humidity controlled',
        'Inventory Management: Real-time stock level monitoring',
        'Pick & Pack Services: Efficient order fulfillment',
        'Cross-Docking: Direct transfer from inbound to outbound',
        'Quality Control: Thorough inspection procedures',
        'Value-Added Services: Labeling, kitting, and assembly'
      ],
      benefits: [
        'Reduce operational costs and overhead',
        'Scalable storage solutions',
        'Strategic locations for optimal distribution',
        'Advanced WMS technology integration'
      ]
    },
    {
      id: 'transportation',
      icon: Truck,
      title: 'Transportation Services',
      subtitle: 'Reliable Ground Transportation',
      description: 'Comprehensive transportation solutions including local delivery, long-haul trucking, and last-mile delivery with real-time tracking.',
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Local Delivery: Same-day and next-day delivery options',
        'Long-Haul Trucking: Interstate and cross-country transport',
        'Last-Mile Delivery: Final delivery to end customers',
        'Fleet Management: Modern, well-maintained vehicles',
        'Real-time GPS Tracking: Live location updates',
        'Specialized Transport: Oversized and hazardous materials'
      ],
      benefits: [
        'Flexible scheduling to meet your needs',
        'Professional and trained drivers',
        'Comprehensive insurance coverage',
        'Competitive pricing and transparent billing'
      ]
    },
    {
      id: 'customs',
      icon: Shield,
      title: 'Customs Clearance',
      subtitle: 'Expert Customs Brokerage',
      description: 'Professional customs brokerage services to ensure smooth import and export processes with full compliance and regulatory expertise.',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Import/Export Documentation: Complete paperwork handling',
        'Duty & Tax Calculation: Accurate assessment and payment',
        'Compliance Management: Regulatory requirement adherence',
        'Classification Services: Proper HS code determination',
        'Trade Advisory: Expert guidance on regulations',
        'Audit Support: Assistance with customs audits'
      ],
      benefits: [
        'Licensed and bonded customs brokers',
        'Reduce delays and demurrage charges',
        'Ensure regulatory compliance',
        'Minimize duty and tax obligations'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Supply Chain Consulting',
      description: 'Strategic guidance to optimize your supply chain operations',
      icon: MapPin
    },
    {
      title: 'Project Cargo',
      description: 'Specialized handling of oversized and heavy cargo',
      icon: Package
    },
    {
      title: 'E-commerce Fulfillment',
      description: 'Complete order fulfillment for online retailers',
      icon: Truck
    },
    {
      title: 'Emergency Logistics',
      description: '24/7 emergency and time-critical shipping solutions',
      icon: Clock
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Logistics <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive logistics solutions designed to streamline your supply chain 
              and drive business growth across global markets.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`mb-24 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-24' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-primary/80 p-3 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className="bg-primary hover:bg-primary/90 group"
                  >
                    <Link href="/contact#quote" className="flex items-center">
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-xl object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized logistics services to meet unique requirements and challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every business has unique logistics requirements. Let us create a 
              tailored solution that fits your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact#quote">Request Custom Quote</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Speak with Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}