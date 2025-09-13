import React from 'react';
import { cn } from '@/lib/utils';

// Loading Skeleton Component
export const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("animate-pulse", className)}>
    <div className="bg-gray-200 h-48 rounded-t-lg mb-4"></div>
    <div className="px-4 pb-4">
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

// Page Loading Component
export const PageLoading: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Memuat halaman...</p>
    </div>
  </div>
);

// Content Skeleton for text content
export const ContentSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className 
}) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "h-4 bg-gray-200 rounded animate-pulse",
          index === lines - 1 && "w-3/4" // Last line is shorter
        )}
      />
    ))}
  </div>
);

// Button Loading State
export const ButtonLoading: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div 
      className={cn(
        "border-2 border-current border-t-transparent rounded-full animate-spin",
        sizeClasses[size]
      )}
    />
  );
};

// Image Loading Placeholder
export const ImageSkeleton: React.FC<{ 
  width?: number; 
  height?: number; 
  className?: string;
  aspectRatio?: string;
}> = ({ 
  width, 
  height, 
  className,
  aspectRatio = "aspect-video" 
}) => (
  <div 
    className={cn(
      "bg-gray-200 animate-pulse rounded-lg flex items-center justify-center",
      aspectRatio,
      className
    )}
    style={{ width, height }}
  >
    <svg
      className="w-8 h-8 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

// List Item Skeleton
export const ListItemSkeleton: React.FC<{ count?: number; className?: string }> = ({ 
  count = 3, 
  className 
}) => (
  <div className={cn("space-y-4", className)}>
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

// Table Skeleton
export const TableSkeleton: React.FC<{ rows?: number; cols?: number; className?: string }> = ({
  rows = 5,
  cols = 4,
  className
}) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="h-8 bg-gray-200 rounded animate-pulse flex-1"
          />
        ))}
      </div>
    ))}
  </div>
);