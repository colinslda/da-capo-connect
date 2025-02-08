
const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
        Connectez-vous avec des musiciens
      </h1>
      <p className="text-lg md:text-xl text-neutral max-w-2xl mx-auto mb-8">
        Trouvez des collaborateurs, partagez votre musique et participez à des événements musicaux passionnants.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
          Créer un compte
        </button>
        <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-neutral-light transition-colors">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Hero;
