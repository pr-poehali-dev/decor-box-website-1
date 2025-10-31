import PageWrapper from '@/components/PageWrapper';

const Index = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-fade-in w-full" style={{ maxWidth: '120vw' }}>
          <div className="mb-8 relative">
            <img 
              src="https://cdn.poehali.dev/files/e85ee638-91ea-4508-8810-f193c3ed1a65.jpg"
              alt="MAGIC GROUP"
              className="w-full h-auto mx-auto"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.6))',
                maxWidth: '120vw',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mt-8">
            Производство эксклюзивных декоративных коробок
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;