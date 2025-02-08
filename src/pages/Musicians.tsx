
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import Card from "../components/shared/Card";
import { Search } from "lucide-react";

const Musicians = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pt-20 pb-20 md:pb-0 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Musiciens</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-xl text-primary font-medium">L</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Laura Bernard</h3>
                  <p className="text-neutral mb-2">Violoncelliste • Professionnelle</p>
                  <p className="text-sm">Bach, Beethoven, musique de chambre</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-xl text-primary font-medium">P</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Pierre Dubois</h3>
                  <p className="text-neutral mb-2">Pianiste • Amateur</p>
                  <p className="text-sm">Mozart, Chopin, jazz</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Musicians;
