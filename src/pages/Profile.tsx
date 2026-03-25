import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, School, Camera, Save, Edit2, Loader2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL; 

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    college: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) { navigate('/'); return; }

      try {
        const response = await fetch(`${API_URL}/api/auth/profile`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();

        if (response.ok) {
          setUser(data);
          setFormData({
            name: data.name || '',
            mobile: data.mobile || '',
            city: data.city || '',
            college: data.college || ''
          });
        } else {
          toast.error("Session expired.");
          localStorage.clear();
          navigate('/');
        }
      } catch (err) {
        toast.error("Server connection failed");
      } finally {
        setAuthChecking(false);
      }
    };
    fetchProfile();
  }, [navigate, API_URL]);

  const handleDiscard = () => {
    setFormData({
      name: user?.name || '',
      mobile: user?.mobile || '',
      city: user?.city || '',
      college: user?.college || ''
    });
    setIsEditing(false);
    toast("Changes discarded", { icon: 'ℹ️' });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Profile updated! 🎉');
        setIsEditing(false);
      } else {
        toast.error(data.msg || "Update failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (authChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Loader2 className="animate-spin text-[#2A52BE]" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-12 font-sans animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button - Responsive Spacing */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-sm mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* LEFT: Avatar Card - Only sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 order-1">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-2xl shadow-blue-500/5 border border-gray-100 text-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-6">
                <div className="w-full h-full bg-[#2A52BE] rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center text-white text-3xl sm:text-5xl font-black shadow-2xl shadow-blue-600/30">
                  {user?.name?.charAt(0)}
                </div>
                <button className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 p-2 sm:p-3 bg-white text-gray-700 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 hover:text-blue-600 transition-all hover:scale-110">
                  <Camera size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight mb-1 truncate px-2">{user?.name}</h3>
              <p className="text-[10px] sm:text-[11px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 py-1 px-4 rounded-full inline-block">
                {user?.role || 'Student'}
              </p>
              
              <div className="mt-6 sm:mt-10">
                <button 
                  onClick={() => isEditing ? handleDiscard() : setIsEditing(true)}
                  className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${isEditing ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-[#2A52BE] text-white hover:bg-[#1e3d8f] shadow-lg shadow-blue-600/10'}`}
                >
                  {isEditing ? 'Discard' : <><Edit2 size={16} /> Edit Profile</>}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Fields */}
          <div className="lg:col-span-8 order-2">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 shadow-2xl shadow-blue-500/5 border border-gray-100">
              <div className="mb-8 sm:mb-10 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">Personal Information</h2>
                <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Keep your profile updated for a better experience</p>
              </div>

              <form onSubmit={handleUpdate} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  
                  {/* Name Input */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 block">Full Name</label>
                    <div className="relative group">
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditing ? 'text-blue-500' : 'text-gray-300'}`} size={18} />
                      <input 
                        name="name"
                        disabled={!isEditing}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all text-sm font-bold disabled:text-gray-400"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                  </div>

                  {/* Email (Locked) */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 block">Email (Locked)</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        disabled
                        value={user?.email || ''}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-100 border-2 border-transparent rounded-xl sm:rounded-2xl text-gray-400 text-sm font-bold cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 block">Phone</label>
                    <div className="relative">
                      <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-300`} size={18} />
                      <input 
                        name="mobile"
                        disabled={!isEditing}
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all text-sm font-bold disabled:text-gray-400"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-span-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 block">City</label>
                    <div className="relative">
                      <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-300`} size={18} />
                      <input 
                        name="city"
                        disabled={!isEditing}
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all text-sm font-bold disabled:text-gray-400"
                        placeholder="Delhi"
                      />
                    </div>
                  </div>

                  {/* College */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 block">College</label>
                    <div className="relative">
                      <School className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-300`} size={18} />
                      <input 
                        name="college"
                        disabled={!isEditing}
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all text-sm font-bold disabled:text-gray-400"
                        placeholder="Amity University"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                {isEditing && (
                  <div className="pt-6 border-t border-gray-50 animate-in slide-in-from-bottom-2 duration-300">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black shadow-xl shadow-gray-900/10 transition-all active:scale-[0.98]"
                    >
                      {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={20} /> Update Profile</>}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}