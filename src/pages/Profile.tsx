
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Card from "../components/shared/Card";
import { Music, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pt-20 pb-20 md:pb-0 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-primary font-medium">M</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Marie Dupont</h1>
            <p className="text-neutral">Violoniste • Professionnelle</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <div className="flex items-center mb-4">
                <Music className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold">Répertoire</h2>
              </div>
              <ul className="space-y-2 text-neutral">
                <li>Mozart - Concerto n°3 en Sol majeur</li>
                <li>Bach - Partita n°2 en Ré mineur</li>
                <li>Tchaïkovski - Concerto en Ré majeur</li>
              </ul>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <LinkIcon className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold">Liens</h2>
              </div>
              <div className="space-y-2">
                <a href="#" className="block text-primary hover:underline">YouTube</a>
                <a href="#" className="block text-primary hover:underline">SoundCloud</a>
                <a href="#" className="block text-primary hover:underline">Instagram</a>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
