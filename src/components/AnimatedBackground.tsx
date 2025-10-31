const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
      
      <div className="absolute top-[10%] left-[15%] w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="animate-float">
          <polygon
            points="50,5 61,38 95,38 68,59 79,92 50,71 21,92 32,59 5,38 39,38"
            fill="url(#goldGradient)"
            className="animate-glow"
          />
        </svg>
      </div>

      <div className="absolute top-[60%] right-[20%] w-24 h-24 opacity-15" style={{ animationDelay: '5s' }}>
        <svg viewBox="0 0 100 100" className="animate-float">
          <polygon
            points="50,5 61,38 95,38 68,59 79,92 50,71 21,92 32,59 5,38 39,38"
            fill="url(#goldGradient)"
            className="animate-glow"
          />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[70%] w-40 h-40 opacity-10" style={{ animationDelay: '10s' }}>
        <svg viewBox="0 0 100 100" className="animate-float">
          <polygon
            points="50,5 61,38 95,38 68,59 79,92 50,71 21,92 32,59 5,38 39,38"
            fill="url(#goldGradient)"
            className="animate-glow"
          />
        </svg>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FDB931" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
