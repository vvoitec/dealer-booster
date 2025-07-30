import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Car, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Dziękujemy za zainteresowanie!",
        description: "Powiadomimy Cię, gdy aplikacja będzie gotowa do wczesnego dostępu.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative w-full py-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/dealer-booster/lovable-uploads/d74231e7-bd36-408d-9de6-c48d62d8ebbe.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white drop-shadow-lg">
                Zautomatyzuj swój komis
                <span className="block drop-shadow-lg bg-primary/90 text-white px-4 py-2 rounded-lg inline-block mt-2 border border-white/40">Sprzedaż i Marketing</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 drop-shadow-md">
                Automatycznie importuj ogłoszenia z OLX, zarządzaj reklamami na Facebook i Google, śledź potencjalnych klientów dzięki naszej zintegrowanej platformie zaprojektowanej specjalnie dla komisów samochodowych.
              </p>
              <div className="w-full">
                <Button size="lg" asChild className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold shadow-xl border-2 border-white">
                  <a href="https://forms.google.com/your-survey-link" target="_blank" rel="noopener noreferrer">
                    Pomóż nam to zbudować <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Waiting list form */}
            <div className="flex justify-center lg:justify-end w-full">
              <Card className="w-full lg:max-w-md bg-white/95 backdrop-blur-sm shadow-xl border-2 border-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Dołącz do Listy Oczekujących</CardTitle>
                  <CardDescription className="text-gray-700">
                    Bądź wśród pierwszych, którzy uzyskają dostęp do naszej platformy po jej uruchomieniu. Otrzymaj cenę wczesnego dostępu i priorytetowe wsparcie.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-900">Adres Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="twoj@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Dołącz do listy oczekujących
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Wszystko czego potrzebujesz do skalowania swojego komisu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Przestań zarządzać wieloma platformami. Nasze zintegrowane rozwiązanie obsługuje cały Twój lejek sprzedażowy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Car className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Automatyczny import z OLX</CardTitle>
              <CardDescription>
                Nigdy więcej ręcznego dodawania samochodów. Nasz system automatycznie importuje i synchronizuje Twój inwentarz z OLX.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Zarządzanie reklamami</CardTitle>
              <CardDescription>
                Twórz i zarządzaj reklamami Twoich ogłoszeń na Facebook i Google z automatyczną optymalizacją i śledzeniem wydajności.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>CRM dla potencjalnych klientów</CardTitle>
              <CardDescription>
                Śledź potencjalnych klientów dzięki naszemu wbudowanemu CRM zaprojektowanemu specjalnie dla komisów samochodowych.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="relative w-full py-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/dealer-booster/lovable-uploads/1747c0cf-a44e-4ae9-af60-aae6a929cd54.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center mb-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Stworzone dla małych i średnich komisów</h2>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Oszczędzaj godziny każdego tygodnia</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-gray-700">Koniec z ręcznym dodawaniem samochodów na wiele platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-gray-700">Automatyczne tworzenie i optymalizacja reklam</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-gray-700">Scentralizowane zarządzanie potencjalnymi klientami i przypomnienia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-gray-700">Analityka wydajności i wglądy w czasie rzeczywistym</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Obecne problemy:</h3>
            <div className="space-y-3 text-gray-600">
              <p>• Spędzanie godzin na ręcznym dodawaniu samochodów</p>
              <p>• Utrata klientów z powodu braku skutecznego kontaktu po pierwszym zapytaniu</p>
              <p>• Nieskuteczne kampanie reklamowe</p>
              <p>• Brak scentralizowanego systemu dla inwentarza ogłoszeń</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 DealerBoost. Stworzone dla dealerów samochodowych, przez ekspertów branży motoryzacyjnej.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
