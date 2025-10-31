const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[60vh] max-h-[60vh] opacity-10 animate-float-slow pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/files/20fe6d01-6b88-48c7-baf8-ca4447da55da.jpg" 
          alt="Watermark" 
          className="w-full h-full object-contain"
          style={{
            mixBlendMode: 'screen',
            filter: 'brightness(1.2)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
