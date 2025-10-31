import PageWrapper from '@/components/PageWrapper';
import Icon from '@/components/ui/icon';

const processSteps = [
  {
    icon: 'Lightbulb',
    title: 'Концепция и дизайн',
    description: 'Разрабатываем уникальный дизайн с учетом фирменного стиля клиента, создаем 3D-визуализацию и утверждаем макет перед производством'
  },
  {
    icon: 'Layers',
    title: 'Подбор материалов',
    description: 'Тщательно подбираем премиальные материалы от проверенных поставщиков: дизайнерский картон, переплетный картон, эко-материалы с сертификатами качества'
  },
  {
    icon: 'Scissors',
    title: 'Прецизионная резка',
    description: 'Используем высокоточные плоттеры для идеальной резки заготовок с погрешностью не более 0,1 мм, что обеспечивает безупречную геометрию изделий'
  },
  {
    icon: 'Palette',
    title: 'Печать и отделка',
    description: 'Применяем современные технологии печати, тиснение фольгой, УФ-лакирование, шелкографию и другие методы для создания эффектного внешнего вида'
  },
  {
    icon: 'Settings',
    title: 'Сборка и контроль',
    description: 'Опытные мастера вручную собирают каждое изделие, проводят многоступенчатый контроль качества, проверяя каждую деталь на соответствие стандартам'
  },
  {
    icon: 'Package',
    title: 'Упаковка и доставка',
    description: 'Бережно упаковываем готовую продукцию для транспортировки и организуем доставку точно в срок в любую точку мира'
  }
];

const Process = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-16">
            <span className="text-gradient-gold">ПРОЦЕСС ПРОИЗВОДСТВА</span>
          </h1>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center">
                    <Icon name={step.icon} size={28} className="text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-5xl font-unbounded font-bold text-primary/20">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Process;
