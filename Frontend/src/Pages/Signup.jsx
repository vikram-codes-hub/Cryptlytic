import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* LEFT SECTION - Hero */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-16 lg:py-0 z-10">
        <div className="space-y-6">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/90 font-medium">Real-time Crypto Tracking</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Track Crypto
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Real Time.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 max-w-md leading-relaxed">
            Monitor cryptocurrency prices, analyze trends, and make informed decisions with our powerful platform.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
              ⚡ Live Updates
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
              📊 Advanced Charts
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
              🔔 Price Alerts
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - Form */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 py-12 lg:py-0 z-10">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Get Started'}
              </h2>
              <p className="text-white/60 text-sm">
                {isLogin ? 'Login to continue your journey' : 'Create your account today'}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Full Name Input */}
              {!isLogin && (
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                </div>
              )}

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] transition-all duration-200 mt-6"
              >
                {isLogin ? 'Login Now' : 'Create Account'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/40">or</span>
              </div>
            </div>

            {/* Toggle Login/Signup */}
            <p className="text-white/70 text-center text-sm">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <span
                    className="cursor-pointer text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    onClick={loginHandler}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    className="cursor-pointer text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    onClick={loginHandler}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              🔒 Your data is encrypted and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;