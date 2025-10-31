import PageWrapper from '@/components/PageWrapper';
import Icon from '@/components/ui/icon';

const equipment = [
  {
    icon: 'Ruler',
    name: 'Плоттеры',
    description: 'Высокоточные режущие плоттеры Zund и Kongsberg для прецизионной резки и биговки картона любой плотности с точностью до 0,1 мм. Позволяют создавать изделия самых сложных форм.'
  },
  {
    icon: 'Printer',
    name: 'Цифровые принтеры',
    description: 'Профессиональные широкоформатные принтеры HP Indigo и Xerox для высококачественной цифровой печати с разрешением до 2400 dpi. Идеальная цветопередача и детализация.'
  },
  {
    icon: 'Stamp',
    name: 'Тиснильные прессы',
    description: 'Автоматические прессы для горячего и холодного тиснения фольгой, конгревного и блинтового тиснения. Создают эффектное рельефное изображение и золотое покрытие.'
  },
  {
    icon: 'Box',
    name: 'Крышкоделательная машина',
    description: 'Специализированное оборудование для автоматической сборки крышек коробок. Обеспечивает идеально ровные углы и высокую производительность до 1000 изделий в смену.'
  },
  {
    icon: 'Factory',
    name: 'Сборочные линии',
    description: 'Современные полуавтоматические линии для оклейки картона тканью, сборки коробок и установки магнитных замков. Сочетание автоматизации с контролем мастера.'
  }
];

const Equipment = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-16">
            <span className="text-gradient-gold">ОБОРУДОВАНИЕ</span>
          </h1>

          <div className="space-y-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center">
                      <Icon name={item.icon} size={28} className="text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-unbounded font-bold text-gradient-gold mb-3">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/10 to-[#FDB931]/10 p-8 rounded-lg border border-primary/30">
            <p className="text-center text-xl text-muted-foreground leading-relaxed">
              Весь парк оборудования регулярно проходит техническое обслуживание 
              и калибровку для обеспечения стабильно высокого качества продукции
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Equipment;
