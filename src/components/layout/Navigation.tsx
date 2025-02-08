
import { Link } from "react-router-dom";
import { Home, Users, Video, MessageSquare, Calendar } from "lucide-react";

const Navigation = () => {
  const links = [
    { to: "/", icon: Home, label: "Accueil" },
    { to: "/feed", icon: Video, label: "Feed" },
    { to: "/musicians", icon: Users, label: "Musiciens" },
    { to: "/messages", icon: MessageSquare, label: "Messages" },
    { to: "/events", icon: Calendar, label: "Événements" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:relative md:border-t-0 md:border-r md:w-20 md:h-screen z-50">
      <div className="flex justify-around md:flex-col md:h-full md:justify-start md:pt-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="p-4 flex flex-col items-center text-neutral hover:text-primary transition-colors relative group"
          >
            <link.icon className="w-6 h-6" />
            <span className="text-xs mt-1 md:hidden">{link.label}</span>
            <span className="hidden md:block absolute left-full ml-2 px-2 py-1 bg-primary text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
