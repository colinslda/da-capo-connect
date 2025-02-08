
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import Card from "../components/shared/Card";
import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pt-20 pb-20 md:pb-0 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Événements</h1>
          <div className="space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center text-center">
                  <div>
                    <div className="text-primary font-bold">MAR</div>
                    <div className="text-primary text-xl font-bold">15</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Concert de Printemps</h3>
                  <p className="text-neutral mb-2">Conservatoire de Genève</p>
                  <p className="text-sm">Mozart, Beethoven - Quatuor à cordes</p>
                  <button className="mt-4 text-primary text-sm font-medium hover:underline">
                    Plus d'informations
                  </button>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center text-center">
                  <div>
                    <div className="text-primary font-bold">AVR</div>
                    <div className="text-primary text-xl font-bold">02</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Masterclass Violon</h3>
                  <p className="text-neutral mb-2">École de Musique de Lausanne</p>
                  <p className="text-sm">Bach - Sonates et Partitas</p>
                  <button className="mt-4 text-primary text-sm font-medium hover:underline">
                    Plus d'informations
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
