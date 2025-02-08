
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pb-20 md:pb-0">
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default Index;
