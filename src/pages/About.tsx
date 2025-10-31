import PageWrapper from '@/components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-8">
            <span className="text-gradient-gold">О ПРОИЗВОДСТВЕ</span>
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-center text-xl text-muted-foreground mb-12">
              MAGIC GROUP — это премиальное производство эксклюзивных декоративных 
              и подарочных коробок для самых требовательных клиентов
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-4">
                  Современные технологии
                </h3>
                <p className="text-muted-foreground">
                  Мы используем передовое европейское оборудование и инновационные технологии 
                  производства, которые позволяют реализовывать проекты любой сложности с 
                  безупречной точностью
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-4">
                  Ручная работа
                </h3>
                <p className="text-muted-foreground">
                  Каждое изделие проходит через руки опытных мастеров, которые следят 
                  за качеством на каждом этапе производства, от раскроя до финальной сборки
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-4">
                  Эксклюзивность
                </h3>
                <p className="text-muted-foreground">
                  Мы создаем уникальные решения под индивидуальные требования каждого клиента. 
                  Каждая коробка — это произведение искусства, отражающее стиль вашего бренда
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-4">
                  Контроль качества
                </h3>
                <p className="text-muted-foreground">
                  Многоступенчатая система контроля качества на каждом этапе производства 
                  гарантирует безупречный результат и соответствие высочайшим стандартам
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-2xl md:text-3xl font-unbounded font-bold text-gradient-gold leading-relaxed">
                Современное производство. Профессиональная команда. 
                <br />
                Безупречное качество.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
