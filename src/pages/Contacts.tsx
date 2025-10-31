import PageWrapper from '@/components/PageWrapper';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-unbounded font-bold text-center mb-8">
            <span className="text-gradient-gold">КОНТАКТЫ</span>
          </h1>

          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-unbounded font-bold text-gradient-gold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@magicgroup.ru</p>
                    <p className="text-muted-foreground">sales@magicgroup.ru</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-unbounded font-bold text-gradient-gold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-unbounded font-bold text-gradient-gold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Производственная, д. 15</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/10 to-[#FDB931]/10 p-6 rounded-lg border border-primary/30">
                <h3 className="font-unbounded font-bold text-gradient-gold mb-3">
                  Почему выбирают нас?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Бесплатная консультация и расчет стоимости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>3D-визуализация проекта перед производством</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Гарантия качества и точные сроки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Доставка по всей России и СНГ</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-unbounded font-bold text-gradient-gold mb-6">
                  Оставьте заявку
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Компания"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FDB931] text-black font-unbounded font-bold hover:opacity-90 transition-opacity"
                  >
                    Отправить заявку
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contacts;
