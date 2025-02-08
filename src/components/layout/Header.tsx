
import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          DaCapo
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-neutral-light rounded-full transition-colors">
            <Search className="w-6 h-6 text-neutral" />
          </button>
          <button className="p-2 hover:bg-neutral-light rounded-full transition-colors">
            <Bell className="w-6 h-6 text-neutral" />
          </button>
          <Link 
            to="/profile" 
            className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary font-medium"
          >
            M
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
