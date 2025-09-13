import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format currency to Indonesian Rupiah
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format currency without currency symbol
export function formatPrice(amount: number): string {
  return amount.toLocaleString('id-ID');
}

// Scroll to section utility
export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Generate WhatsApp URL with message
export function generateWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const cleanPhone = phoneNumber.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// Debounce function for search/filter inputs
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Get difficulty color based on level
export function getDifficultyColor(difficulty: 'pemula' | 'menengah' | 'sulit'): string {
  switch (difficulty) {
    case 'pemula':
      return 'bg-green-100 text-green-800';
    case 'menengah':
      return 'bg-yellow-100 text-yellow-800';
    case 'sulit':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

// Get difficulty label in Indonesian
export function getDifficultyLabel(difficulty: 'pemula' | 'menengah' | 'sulit'): string {
  switch (difficulty) {
    case 'pemula':
      return 'Pemula';
    case 'menengah':
      return 'Menengah';
    case 'sulit':
      return 'Sulit';
    default:
      return 'Tidak diketahui';
  }
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Format date to Indonesian locale
export function formatDate(date: Date): string {
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format date for datetime-local input
export function formatDateTimeLocal(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Check if date is today
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

// Check if date is in the future
export function isFutureDate(date: Date): boolean {
  return date > new Date();
}

// Get reading time estimate (assuming 200 words per minute)
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Create a delay promise for loading states
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Indonesian phone number
export function isValidIndonesianPhone(phone: string): boolean {
  // Indonesian phone number patterns: +62, 62, 08, or 8
  const phoneRegex = /^(\+?62|0?8)[0-9]{8,12}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ''));
}

// Format Indonesian phone number
export function formatIndonesianPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  // Handle different formats
  if (cleaned.startsWith('62')) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('8')) {
    return `+62${cleaned}`;
  } else if (cleaned.startsWith('08')) {
    return `+62${cleaned.substring(1)}`;
  }
  
  return phone; // Return original if can't format
}

// Generate booking ID
export function generateBookingId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `JS-${timestamp}-${randomStr}`.toUpperCase();
}

// Calculate price based on participant count
export function calculatePrice(
  basePrice: { solo: number; group2_5: number; group6plus: number },
  participantCount: number
): number {
  if (participantCount === 1) {
    return basePrice.solo;
  } else if (participantCount >= 2 && participantCount <= 5) {
    return basePrice.group2_5;
  } else {
    return basePrice.group6plus;
  }
}

// Get price tier label
export function getPriceTierLabel(participantCount: number): string {
  if (participantCount === 1) {
    return 'Solo Traveler';
  } else if (participantCount >= 2 && participantCount <= 5) {
    return 'Grup Kecil (2-5 orang)';
  } else {
    return 'Grup Besar (6+ orang)';
  }
}
