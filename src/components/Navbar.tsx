import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Feather, User, Heart, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'الرئيسية', path: '/', icon: <Heart size={18} /> },
    { name: 'القصائد', path: '/poems', icon: <BookOpen size={18} /> },
    { name: 'خواطر الشاعر', path: '/thoughts', icon: <Feather size={18} /> },
    { name: 'تعرف علينا', path: '/about', icon: <User size={18} /> },
    { name: 'الدعم', path: '/support', icon: <Heart size={18} /> },
    { name: 'اتصل بنا', path: '/contact', icon: <Phone size={18} /> }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <span className="font-aref text-2xl text-primary-800">ديوان الميسرات</span>
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 md:space-x-reverse">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link flex items-center gap-1 px-3 py-2 rounded-md ${isActive ? 'active' : ''}`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link block px-3 py-2 rounded-md ${isActive ? 'active bg-primary-50' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;