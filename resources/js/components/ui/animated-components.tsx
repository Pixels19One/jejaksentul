import React, { forwardRef } from 'react';
import { useScrollAnimation } from '@/hooks';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className, threshold = 0.1, delay = 0, direction = 'up', ...props }, ref) => {
    const [setAnimationRef, isVisible] = useScrollAnimation(threshold);

    // Combine refs
    const combinedRef = (node: HTMLElement | null) => {
      setAnimationRef(node);
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const getAnimationClasses = () => {
      const baseClasses = "transition-all duration-700 ease-out";
      
      if (isVisible) {
        return cn(baseClasses, "opacity-100 translate-x-0 translate-y-0");
      }

      switch (direction) {
        case 'up':
          return cn(baseClasses, "opacity-0 translate-y-8");
        case 'down':
          return cn(baseClasses, "opacity-0 -translate-y-8");
        case 'left':
          return cn(baseClasses, "opacity-0 translate-x-8");
        case 'right':
          return cn(baseClasses, "opacity-0 -translate-x-8");
        case 'fade':
        default:
          return cn(baseClasses, "opacity-0");
      }
    };

    return (
      <div
        ref={combinedRef}
        className={cn(getAnimationClasses(), className)}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

// Staggered Animation Container
interface StaggeredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  stagger?: number;
  threshold?: number;
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className,
  stagger = 100,
  threshold = 0.1,
  ...props
}) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          threshold={threshold}
          delay={index * stagger}
          direction="up"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

// Fade In Up Animation (most common)
interface FadeInUpProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <AnimatedSection
    direction="up"
    delay={delay}
    threshold={threshold}
    {...props}
  >
    {children}
  </AnimatedSection>
);

// Fade In Left Animation
interface FadeInLeftProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const FadeInLeft: React.FC<FadeInLeftProps> = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <AnimatedSection
    direction="left"
    delay={delay}
    threshold={threshold}
    {...props}
  >
    {children}
  </AnimatedSection>
);

// Fade In Right Animation
interface FadeInRightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const FadeInRight: React.FC<FadeInRightProps> = ({ children, delay = 0, threshold = 0.1, ...props }) => (
  <AnimatedSection
    direction="right"
    delay={delay}
    threshold={threshold}
    {...props}
  >
    {children}
  </AnimatedSection>
);

// Scale Animation Component
interface ScaleAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
}

const ScaleAnimation: React.FC<ScaleAnimationProps> = ({ 
  children, 
  className, 
  threshold = 0.1, 
  ...props 
}) => {
  const [setRef, isVisible] = useScrollAnimation(threshold);

  return (
    <div
      ref={setRef}
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Parallax effect (simple)
interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  speed?: number;
}

const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  className, 
  speed = 0.5, 
  ...props 
}) => {
  const [scrollY, setScrollY] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("transform-gpu", className)}
      style={{ transform: `translateY(${scrollY}px)` }}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  AnimatedSection,
  StaggeredContainer,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleAnimation,
  Parallax
};