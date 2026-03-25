import React, { useState, FormEvent } from 'react';
import { X, Loader2, MapPin, School, User, Phone, Mail, Lock, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

interface AuthProps {
  onClose?: () => void;
  onLoginSuccess?: (userData: any) => void;
}

type AuthMode = 'login' | 'signup' | 'forgotPassword';

const Auth: React.FC<AuthProps> = ({ onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  // --- Naye States OTP Flow ke liye ---
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    city: '',
    college: '',
    otp: '' // OTP field added
  });

  // Jab mode change ho (Login se Signup etc.) toh state reset kar do
  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setOtpSent(false);
    setOtpVerified(false);
    setFormData({ ...formData, otp: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- OTP Send Karne Ka Function ---
  const handleSendOtp = async () => {
    if (!formData.email || !formData.email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setOtpLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent to your email! 📩");
        setOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP ❌");
      }
    } catch (err) {
      toast.error("Server connection failed.");
    } finally {
      setOtpLoading(false);
    }
  };

  // --- OTP Verify Karne Ka Frontend Function ---
  const handleVerifyOtp = () => {
    if (formData.otp.length === 6) {
      // Backend real verification registration ke time karega, 
      // yahan hum bas UI unlock kar rahe hain.
      setOtpVerified(true);
      toast.success("OTP accepted! You can now create your account. ✅");
    } else {
      toast.error("Please enter a valid 6-digit OTP");
    }
  };

  // --- Final Submit Function ---
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
    const url = `${API_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (mode === 'login') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          
          toast.success("Welcome back! Login successful"); 
          
          if (onLoginSuccess) onLoginSuccess(data.user);
          if (onClose) onClose();
        } else {
          toast.success("Registration Successful! Please login."); 
          handleModeChange('login'); // Registration ke baad login screen pe bhej do
        }
      } else {
        toast.error(data.message || data.msg || "Something went wrong ❌"); 
        // Agar OTP galat hua toh verification reset kar do
        if (data.message === 'Invalid OTP' || data.message === 'Incorrect OTP') {
          setOtpVerified(false);
        }
      }
    } catch (err) {
      toast.error("Server connection failed. Check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans transition-opacity" onClick={onClose}>
      <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-lg border border-gray-100 relative max-h-[95vh] overflow-y-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gray-900 transition-all cursor-pointer">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-black text-gray-800 text-center mb-2 mt-4">
          {mode === 'login' && 'Welcome Back!'}
          {mode === 'signup' && 'Create Account'}
          {mode === 'forgotPassword' && 'Reset Password'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {mode === 'signup' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                <div className="relative">
                   <User className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="name" type="text" required onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm" placeholder="Your Full Name" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Phone</label>
                <div className="relative">
                   <Phone className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="mobile" type="tel" required onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm" placeholder="9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">City</label>
                <div className="relative">
                   <MapPin className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="city" type="text" required onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm" placeholder="Jaipur" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">College/University</label>
                <div className="relative">
                   <School className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="college" type="text" required onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm" placeholder="IIT Delhi" />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {/* Email Field with Send OTP Button */}
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                   <Mail className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="email" type="email" required onChange={handleChange} disabled={otpSent && mode === 'signup'} className={`w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm ${otpSent && mode === 'signup' ? 'opacity-70 cursor-not-allowed' : ''}`} placeholder="you@example.com" />
                </div>
                {mode === 'signup' && !otpSent && formData.email.includes('@') && (
                  <button type="button" onClick={handleSendOtp} disabled={otpLoading} className="px-5 bg-blue-100 text-[#2A52BE] font-bold rounded-xl text-sm hover:bg-blue-200 transition-all flex items-center justify-center whitespace-nowrap min-w-[100px]">
                    {otpLoading ? <Loader2 className="animate-spin" size={18} /> : 'Send OTP'}
                  </button>
                )}
              </div>
            </div>

            {/* OTP Field with Verify Button */}
            {mode === 'signup' && otpSent && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Enter OTP</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <ShieldCheck className="absolute left-4 top-3.5 text-gray-300" size={18} />
                    <input name="otp" type="text" maxLength={6} required onChange={handleChange} disabled={otpVerified} className={`w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm tracking-widest ${otpVerified ? 'opacity-70 cursor-not-allowed' : ''}`} placeholder="123456" />
                  </div>
                  {!otpVerified ? (
                    <button type="button" onClick={handleVerifyOtp} disabled={formData.otp.length !== 6} className={`px-5 font-bold rounded-xl text-sm transition-all flex items-center justify-center whitespace-nowrap min-w-[100px] ${formData.otp.length === 6 ? 'bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                      Verify
                    </button>
                  ) : (
                    <div className="px-5 bg-green-500 text-white font-bold rounded-xl text-sm flex items-center justify-center whitespace-nowrap min-w-[100px]">
                      Verified ✓
                    </div>
                  )}
                </div>
              </div>
            )}

            {mode !== 'forgotPassword' && (
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Password</label>
                <div className="relative">
                   <Lock className="absolute left-4 top-3.5 text-gray-300" size={18} />
                   <input name="password" type="password" required onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-[#2A52BE] outline-none transition-all text-sm" placeholder="••••••••" />
                </div>
              </div>
            )}
          </div>

          <button 
            type="submit" 
            disabled={loading || (mode === 'signup' && !otpVerified)} 
            className={`w-full text-white font-bold py-4 rounded-2xl transition-all duration-200 mt-4 flex items-center justify-center gap-2 
              ${loading || (mode === 'signup' && !otpVerified) 
                ? 'bg-gray-300 cursor-not-allowed shadow-none' 
                : 'bg-[#2A52BE] hover:bg-[#1e3d8f] shadow-lg shadow-blue-600/20 active:scale-[0.98]'}`}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : (
              mode === 'login' ? 'Login' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500 font-medium">
          {mode === 'login' ? (
            <>New here? <button onClick={() => handleModeChange('signup')} className="text-[#2A52BE] font-bold hover:underline">Create an account</button></>
          ) : (
            <>Already have an account? <button onClick={() => handleModeChange('login')} className="text-[#2A52BE] font-bold hover:underline">Login here</button></>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;