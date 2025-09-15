'use client';

import { motion } from 'framer-motion';
import { Users, Package, Globe, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    number: '500+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    icon: Users,
    color: 'text-primary'
  },
  {
    id: 2,
    number: '10K+',
    label: 'Shipments Delivered',
    description: 'Successful deliveries completed',
    icon: Package,
    color: 'text-primary'
  },
  {
    id: 3,
    number: '50+',
    label: 'Countries Served',
    description: 'Global network coverage',
    icon: Globe,
    color: 'text-primary'
  },
  {
    id: 4,
    number: '15+',
    label: 'Years Experience',
    description: 'Industry expertise',
    icon: Award,
    color: 'text-primary'
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us the trust of clients worldwide. Here are some numbers that showcase our success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
