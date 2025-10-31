import PageWrapper from '@/components/PageWrapper';

const materials = [
  {
    name: 'Дизайнерский картон',
    description: 'Премиальный импортный картон с уникальными текстурами и фактурами. Плотность от 250 до 600 г/м². Широкая палитра цветов и покрытий для создания эксклюзивных изделий.',
    image: 'https://cdn.poehali.dev/projects/ce71d63e-b688-44bb-9d0d-220ac873f7eb/files/f9e6cc3a-1979-49d4-89d0-5d199acf9a66.jpg'
  },
  {
    name: 'Переплетный картон',
    description: 'Высокопрочный картон толщиной от 1,5 до 3 мм для создания жесткого каркаса. Обеспечивает идеальную форму и долговечность конструкции даже при интенсивной эксплуатации.',
    image: 'https://cdn.poehali.dev/projects/ce71d63e-b688-44bb-9d0d-220ac873f7eb/files/f9e6cc3a-1979-49d4-89d0-5d199acf9a66.jpg'
  },
  {
    name: 'Премиальные ткани',
    description: 'Натуральный шелк, бархат, лен европейского производства. Используются для обтяжки и внутренней отделки коробок премиум-класса, создавая тактильное удовольствие.',
    image: 'https://cdn.poehali.dev/projects/ce71d63e-b688-44bb-9d0d-220ac873f7eb/files/1a00a866-13cf-49a2-a346-049abf556782.jpg'
  },
  {
    name: 'Бархат и велюр',
    description: 'Роскошные ворсовые материалы с глубоким насыщенным цветом. Идеальны для создания премиальной подарочной упаковки ювелирных изделий и люксовых брендов.',
    image: 'https://cdn.poehali.dev/projects/ce71d63e-b688-44bb-9d0d-220ac873f7eb/files/0aea826c-34d7-41f9-a331-0871fb4f8692.jpg'
  },
  {
    name: 'Эко-материалы',
    description: 'Картон из переработанного сырья и материалы на растительной основе с международными сертификатами FSC и PEFC. Сочетание экологичности и премиального качества.',
    image: 'https://cdn.poehali.dev/projects/ce71d63e-b688-44bb-9d0d-220ac873f7eb/files/f9e6cc3a-1979-49d4-89d0-5d199acf9a66.jpg'
  }
];

const Materials = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-8">
            <span className="text-gradient-gold">МАТЕРИАЛЫ</span>
          </h1>

          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Мы работаем только с лучшими материалами от проверенных европейских 
            и азиатских поставщиков
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-unbounded font-bold text-gradient-gold mb-3">
                    {material.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 text-center">
            <p className="text-2xl md:text-3xl font-unbounded font-bold text-gradient-gold leading-relaxed">
              Тщательный отбор. Проверенные поставщики.
              <br />
              Тестирование на прочность. Международные стандарты качества.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Materials;
