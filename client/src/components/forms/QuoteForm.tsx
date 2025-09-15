'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calculator, CheckCircle, AlertCircle } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().min(10, 'Phone number is required'),
  serviceType: z.string().min(1, 'Please select a service type'),
  origin: z.string().min(2, 'Origin location is required'),
  destination: z.string().min(2, 'Destination location is required'),
  cargoType: z.string().min(1, 'Please select cargo type'),
  weight: z.string().min(1, 'Weight is required'),
  dimensions: z.string().optional(),
  timeline: z.string().min(1, 'Please select timeline'),
  additionalInfo: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Quote</h3>
      
      {submitStatus === 'success' && (
        <motion.div
          className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-green-700">Thank you! Your quote request has been submitted successfully.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-700">Sorry, there was an error submitting your quote request. Please try again.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name')}
              className="mt-1"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              {...register('company')}
              className="mt-1"
              placeholder="ABC Company Ltd"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className="mt-1"
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              {...register('phone')}
              className="mt-1"
              placeholder="+231 123 456 7890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="serviceType">Service Type *</Label>
            <select
              id="serviceType"
              {...register('serviceType')}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service</option>
              <option value="freight">Freight Transportation</option>
              <option value="warehousing">Warehousing</option>
              <option value="supply-chain">Supply Chain Management</option>
              <option value="customs">Customs Clearance</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="cargoType">Cargo Type *</Label>
            <select
              id="cargoType"
              {...register('cargoType')}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Cargo Type</option>
              <option value="general">General Cargo</option>
              <option value="hazardous">Hazardous Materials</option>
              <option value="perishable">Perishable Goods</option>
              <option value="oversized">Oversized/Heavy</option>
            </select>
            {errors.cargoType && (
              <p className="text-red-500 text-sm mt-1">{errors.cargoType.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="origin">Origin *</Label>
            <Input
              id="origin"
              {...register('origin')}
              className="mt-1"
              placeholder="Monrovia, Liberia"
            />
            {errors.origin && (
              <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="destination">Destination *</Label>
            <Input
              id="destination"
              {...register('destination')}
              className="mt-1"
              placeholder="Buchanna, Liberia"
            />
            {errors.destination && (
              <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="weight">Weight *</Label>
            <Input
              id="weight"
              {...register('weight')}
              className="mt-1"
              placeholder="1000 kg"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dimensions">Dimensions</Label>
            <Input
              id="dimensions"
              {...register('dimensions')}
              className="mt-1"
              placeholder="L x W x H (cm)"
            />
          </div>

          <div>
            <Label htmlFor="timeline">Timeline *</Label>
            <select
              id="timeline"
              {...register('timeline')}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Timeline</option>
              <option value="urgent">Urgent (1-2 days)</option>
              <option value="standard">Standard (3-7 days)</option>
              <option value="economy">Economy (1-2 weeks)</option>
            </select>
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            {...register('additionalInfo')}
            className="mt-1 h-24"
            placeholder="Any special requirements or additional details..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 group"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Submitting...
            </div>
          ) : (
            <div className="flex items-center">
              Get Quote
              <Calculator className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </div>
          )}
        </Button>
      </form>
    </motion.div>
  );
}