'use client';

import { useLoading } from '@/hooks/useLoading';
import { Loading } from '@/components/ui/Loading';
import { motion, AnimatePresence } from 'framer-motion';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isLoading } = useLoading();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" isVisible={isLoading} />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
        className={isLoading ? 'pointer-events-none' : ''}
      >
        {children}
      </motion.div>
    </>
  );
}
