import PageWrapper from '@/components/PageWrapper';

const Index = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="relative inline-block">
              <svg
                viewBox="0 0 100 100"
                className="w-64 h-64 mb-8 mx-auto"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FDB931" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <polygon
                  points="50,10 61,38 95,38 68,59 79,92 50,71 21,92 32,59 5,38 39,38"
                  fill="url(#logoGradient)"
                  filter="url(#glow)"
                  className="animate-glow"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-unbounded font-bold mb-4 tracking-wider">
            <span className="text-gradient-gold">MAGIC</span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-unbounded font-bold mb-12 tracking-wider">
            <span className="text-gradient-gold">GROUP</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Производство эксклюзивных декоративных коробок
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
