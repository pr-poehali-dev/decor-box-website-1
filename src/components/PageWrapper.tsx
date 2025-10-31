import { ReactNode } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';
import MenuButton from './MenuButton';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <MenuButton />
      <main className="relative z-10 pb-32">{children}</main>
      <Navigation />
    </div>
  );
};

export default PageWrapper;