
import { Music2, Users, Video, MessageSquare, Calendar } from "lucide-react";

const features = [
  {
    icon: Music2,
    title: "Profil Musicien",
    description: "Créez votre profil professionnel et partagez votre répertoire"
  },
  {
    icon: Video,
    title: "Partagez votre musique",
    description: "Publiez vos performances en vidéo et audio"
  },
  {
    icon: Users,
    title: "Trouvez des musiciens",
    description: "Recherchez des collaborateurs par instrument et niveau"
  },
  {
    icon: MessageSquare,
    title: "Discutez",
    description: "Échangez avec d'autres musiciens via notre messagerie"
  },
  {
    icon: Calendar,
    title: "Événements",
    description: "Découvrez les concerts et auditions à venir"
  }
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
