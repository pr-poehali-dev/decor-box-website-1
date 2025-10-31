import { ReactNode } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <main className="relative z-10 pb-32">{children}</main>
      <Navigation />
    </div>
  );
};

export default PageWrapper;
