import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading text-2xl font-bold text-primary">FibroPro</div>
          <nav className="hidden md:flex gap-6">
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">Технология</a>
            <a href="#capacity" className="text-foreground hover:text-primary transition-colors">Мощности</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://cdn.poehali.dev/projects/3a62b594-5402-4e55-a44a-88db576148ae/files/62abe5f4-bd40-413f-b116-fd234c0cbb96.jpg')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Производство фибро волокна<br/>нового поколения
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Современные технологии и производственные мощности для создания высококачественной продукции
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Связаться с нами
          </Button>
        </div>
      </section>

      <section id="technology" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-4 animate-fade-in">Технология производства</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наше производство основано на передовых технологиях обработки и формования волокна
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Cog" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Экструзия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Высокотемпературная экструзия полимерного сырья с точным контролем параметров процесса для получения однородной структуры волокна
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Термообработка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Многоступенчатая термическая обработка в контролируемой среде для придания волокну необходимых физико-механических свойств
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Автоматизированная система контроля на всех этапах производства с использованием современного лабораторного оборудования
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="capacity" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Производственные мощности</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современное оборудование позволяет нам выпускать продукцию в промышленных масштабах
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">тонн/год</div>
              <div className="text-sm mt-2">Производственная мощность</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">линий</div>
              <div className="text-sm mt-2">Производственных линий</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">режим</div>
              <div className="text-sm mt-2">Круглосуточная работа</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-4xl font-heading font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">качество</div>
              <div className="text-sm mt-2">Показатель годной продукции</div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Преимущества нашей продукции</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Фибро волокно FibroPro — это продукт высочайшего качества
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Высокая прочность</h3>
                <p className="text-muted-foreground">Превосходные показатели разрывной нагрузки и устойчивости к механическим воздействиям</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="Flame" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Термостойкость</h3>
                <p className="text-muted-foreground">Сохранение свойств при температурах от -40°C до +180°C</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="Droplet" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Химическая стойкость</h3>
                <p className="text-muted-foreground">Устойчивость к воздействию агрессивных сред и растворителей</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="Leaf" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Экологичность</h3>
                <p className="text-muted-foreground">Производство соответствует международным экологическим стандартам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-12">
              Мы готовы ответить на ваши вопросы и предложить оптимальное решение для вашего бизнеса
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@fibropro.ru" className="text-primary hover:underline text-lg">
                    info@fibropro.ru
                  </a>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79001234567" className="text-primary hover:underline text-lg">
                    +7 (900) 123-45-67
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="font-heading text-xl font-bold mb-2">FibroPro</div>
          <p className="text-sm opacity-80">© 2024 Производство фибро волокна. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
