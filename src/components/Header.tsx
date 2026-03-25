import { Menu, X, BookOpen, Smartphone, User, LogOut, ChevronDown, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import Auth from './Auth'; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  
  // --- NAYA STATE: User aur Dropdown ke liye ---
  const [user, setUser] = useState<any>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Page load hote hi check karo ki koi logged in hai ya nahi
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowProfileDropdown(false);
    window.location.reload(); // Refresh to clear all states
  };

  // Login successful hone par Header update karne ke liye
  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  // Navigation Links array (taaki mobile aur desktop dono jagah same rahein)
  const navLinks = ['Placement', 'Interview', 'Competitive Exams'];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2 z-50">
              <img src="/logo.png" width={125} />
            </div>

            {/* Desktop Navigation (Hidden on Mobile & Tablet, Shows on lg and up) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <a key={item} href="/" className="text-sm font-bold text-gray-500 hover:text-[#2A52BE] transition-all uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side Actions (Hidden on Mobile & Tablet, Shows on lg and up) */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => setShowAppModal(true)}
                className="flex items-center gap-2 text-sm font-bold text-[#2A52BE] bg-blue-50 px-4 py-2.5 rounded-xl hover:bg-blue-100 transition-all"
              >
                <Smartphone size={18} />
                <span>App</span>
              </button>

              {/* --- CONDITIONAL RENDERING: Login vs Profile --- */}
              {!user ? (
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="px-6 py-2.5 bg-[#2A52BE] text-white text-sm font-bold rounded-xl hover:bg-[#1e3d8f] shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  Join Now
                </button>
              ) : (
                <div className="relative">
                  {/* User Profile Trigger */}
                  <button 
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="flex items-center gap-3 p-1.5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all"
                  >
                    <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div className="text-left hidden xl:block pr-2">
                      <p className="text-xs font-black text-gray-900 leading-none">{user.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">{user.role || 'Student'}</p>
                    </div>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-50 p-2 animate-in fade-in zoom-in duration-200">
                      {user.role === 'admin' && (
                         <a href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
                           <LayoutDashboard size={18} /> Admin Panel
                         </a>
                      )}
                      <a href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <User size={18} /> My Profile
                      </a>
                      <div className="h-px bg-gray-100 my-1 mx-2" />
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile/Tablet Toggle (Shows on Mobile & Tablet, Hidden on lg) */}
            <button 
              className="lg:hidden p-2 text-gray-900 bg-gray-50 rounded-lg z-50 transition-all hover:bg-gray-100" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Absolute overlay taaki page layout break na ho) */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-6 flex flex-col gap-2">
              
              {user && (
                 <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-gray-900">{user.name}</p>
                      <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{user.role || 'Student'}</p>
                    </div>
                 </div>
              )}
              
              {/* Synced Mobile Links */}
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href="/" 
                  className="px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                >
                  {item}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                {!user ? (
                  <button 
                    onClick={() => { setShowAuthModal(true); setMobileMenuOpen(false); }} 
                    className="w-full py-4 bg-[#2A52BE] text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                  >
                    Login / Sign Up
                  </button>
                ) : (
                  <>
                    <a href="/profile" className="w-full py-4 bg-gray-50 text-gray-700 text-center font-bold rounded-2xl active:bg-gray-100 transition-all">
                      My Profile
                    </a>
                    {user.role === 'admin' && (
                      <a href="/admin" className="w-full py-4 bg-gray-900 text-white text-center font-bold rounded-2xl shadow-lg shadow-gray-900/20 transition-all">
                        Go to Admin Panel
                      </a>
                    )}
                    <button 
                      onClick={handleLogout} 
                      className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl active:bg-red-100 transition-all"
                    >
                      Logout from Device
                    </button>
                  </>
                )}
                <button 
                  onClick={() => { setShowAppModal(true); setMobileMenuOpen(false); }} 
                  className="w-full flex justify-center items-center gap-2 py-4 bg-blue-50 text-[#2A52BE] font-bold rounded-2xl active:bg-blue-100 transition-all"
                >
                  <Smartphone size={20} /> Download Mobile App
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} onLoginSuccess={handleLoginSuccess} />}

      {/* App Coming Soon Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowAppModal(false)}>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm p-10 text-center relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Coming Soon!</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">We're building a world-class mobile app for your learning journey. Stay tuned!</p>
            <button onClick={() => setShowAppModal(false)} className="w-full bg-[#2A52BE] text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">Understood</button>
          </div>
        </div>
      )}
    </>
  );
}