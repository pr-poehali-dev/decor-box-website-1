import PageWrapper from '@/components/PageWrapper';
import Icon from '@/components/ui/icon';

const technologies = [
  {
    icon: 'Box',
    name: '3D-моделирование',
    description: 'Создаем детальные 3D-модели будущих изделий в профессиональных CAD-системах. Клиент видит точную визуализацию коробки до начала производства, что исключает недопонимание и позволяет внести правки на этапе проектирования.'
  },
  {
    icon: 'Zap',
    name: 'Лазерная гравировка',
    description: 'Прецизионная лазерная гравировка логотипов, узоров и текста на картоне, дереве, коже и акриле с микронной точностью. Создает элегантный эффект и долговечную маркировку без использования красок.'
  },
  {
    icon: 'Sparkles',
    name: 'УФ-лакирование',
    description: 'Современная технология нанесения УФ-лака с мгновенным отверждением. Создает глянцевое или матовое покрытие, защищает от истирания, подчеркивает отдельные элементы дизайна выборочным лакированием.'
  },
  {
    icon: 'Star',
    name: 'Тиснение фольгой',
    description: 'Горячее тиснение металлизированной фольгой — золотой, серебряной, голографической. Добавляет роскошный блеск и тактильный рельеф. Сочетается с конгревным тиснением для усиления эффекта премиальности.'
  },
  {
    icon: 'Leaf',
    name: 'Эко-материалы',
    description: 'Используем биоразлагаемые материалы, переработанный картон, краски на водной основе и клеи без формальдегида. Все материалы имеют международные экологические сертификаты FSC, PEFC, ISO 14001.'
  }
];

const Technology = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-8">
            <span className="text-gradient-gold">ТЕХНОЛОГИИ</span>
          </h1>

          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Инновационные решения для создания упаковки будущего
          </p>

          <div className="space-y-8 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={tech.icon} size={28} className="text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-3">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 text-center">
            <p className="text-2xl md:text-3xl font-unbounded font-bold text-gradient-gold leading-relaxed">
              Современное производство любой сложности.
              <br />
              Постоянные инвестиции в технологии.
              <br />
              Регулярное обучение команды.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Technology;
