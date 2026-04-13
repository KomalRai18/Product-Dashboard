import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { FiUser, FiMail, FiPhone, FiLock, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Navbar from '../../components/common/Navbar';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { registrationStyles as s } from './registration.styles';

// ─── Validation Schema ─────────────────────────────────────── 
const registrationSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required').min(2, 'Name is too short'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required').regex(/^\+?[\d\s-]{10,}$/, 'Invalid phone number format'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    console.log('Form Submitted:', data);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Registration successful!', {
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid rgba(99,102,241,0.25)',
      },
    });
    
    reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className={s.container}>
        <div className={s.card}>
          <div className={s.header}>
            <h1 className={s.title}>Create Account</h1>
            <p className={s.subtitle}>Join ProductHub and start your journey</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            {/* Full Name */}
            <div className={s.fieldGroup}>
              <label htmlFor="fullName" className={s.label}>Full Name</label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                icon={<FiUser className="w-4 h-4" />}
                {...register('fullName')}
                className={errors.fullName ? 'border-red-500/50 focus:border-red-500' : ''}
              />
              {errors.fullName && (
                <span className={s.error}>
                  <FiAlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className={s.fieldGroup}>
              <label htmlFor="email" className={s.label}>Email Address</label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                icon={<FiMail className="w-4 h-4" />}
                {...register('email')}
                className={errors.email ? 'border-red-500/50 focus:border-red-500' : ''}
              />
              {errors.email && (
                <span className={s.error}>
                  <FiAlertCircle className="w-3.5 h-3.5" />
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className={s.fieldGroup}>
              <label htmlFor="phone" className={s.label}>Phone Number</label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 234 567 890"
                icon={<FiPhone className="w-4 h-4" />}
                {...register('phone')}
                className={errors.phone ? 'border-red-500/50 focus:border-red-500' : ''}
              />
              {errors.phone && (
                <span className={s.error}>
                  <FiAlertCircle className="w-3.5 h-3.5" />
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className={s.fieldGroup}>
              <label htmlFor="password" className={s.label}>Password</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                icon={<FiLock className="w-4 h-4" />}
                {...register('password')}
                className={errors.password ? 'border-red-500/50 focus:border-red-500' : ''}
              />
              {errors.password && (
                <span className={s.error}>
                  <FiAlertCircle className="w-3.5 h-3.5" />
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full py-3 text-base shadow-xl group"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Complete Registration'}
                {!isSubmitting && <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
          </form>

          <p className={s.footer}>
            Already have an account?{' '}
            <Link to="/" className={s.link}>Return to Home</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Registration;
