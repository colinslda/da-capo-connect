
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import Card from "../components/shared/Card";

const Feed = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pt-20 pb-20 md:pb-0 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Feed</h1>
          <div className="space-y-6">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary font-medium">J</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Jean Dupont</h3>
                    <p className="text-sm text-neutral">Il y a 2 heures</p>
                  </div>
                </div>
                <p>Je cherche un.e violoniste pour un quatuor à cordes !</p>
              </div>
            </Card>
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary font-medium">S</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Sophie Martin</h3>
                    <p className="text-sm text-neutral">Il y a 5 heures</p>
                  </div>
                </div>
                <p>Concert ce weekend au Conservatoire de Genève !</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
