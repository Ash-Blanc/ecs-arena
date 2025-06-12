import React, { useEffect } from 'react';
import { 
  X, 
  Home, 
  Trophy, 
  Target, 
  Sword, 
  User, 
  Activity, 
  Flame, 
  Settings, 
  LogOut,
  Crown,
  Users,
  Zap,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  user: any;
}

export default function Sidebar({ isOpen, onClose, currentScreen, onNavigate, user }: SidebarProps) {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, description: 'Overview & stats' },
    { id: 'olympiads', label: 'Olympiads', icon: Target, description: 'Academic competitions' },
    { id: 'competitions', label: 'Battle Arena', icon: Sword, description: 'Live competitions' },
    { id: 'quests', label: 'Quest System', icon: Flame, description: 'Daily challenges' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, description: 'Global rankings' },
    { id: 'activities', label: 'Activities', icon: Activity, description: 'Log activities' },
    { id: 'profile', label: 'Profile', icon: User, description: 'Your achievements' },
  ];

  const handleNavigation = (screen: string) => {
    onNavigate(screen);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">ECS Arena</h2>
              <p className="text-gray-400 text-sm">Champion's Hub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <h3 className="text-white font-semibold">{user?.name || 'Alex Johnson'}</h3>
              <p className="text-gray-400 text-sm">Level {user?.level || 8} • {user?.xp || 2450} XP</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center text-blue-400 mb-1">
                <Trophy className="w-4 h-4" />
              </div>
              <p className="text-white font-bold text-sm">#7</p>
              <p className="text-gray-400 text-xs">Rank</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center text-purple-400 mb-1">
                <Zap className="w-4 h-4" />
              </div>
              <p className="text-white font-bold text-sm">{user?.badges || 12}</p>
              <p className="text-gray-400 text-xs">Badges</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center text-orange-400 mb-1">
                <Flame className="w-4 h-4" />
              </div>
              <p className="text-white font-bold text-sm">6</p>
              <p className="text-gray-400 text-xs">Streak</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentScreen === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center">
                    <IconComponent className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-400' : ''}`} />
                    <div className="text-left">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs opacity-75">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'text-blue-400' : 'group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="space-y-2">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </button>
            <button
              onClick={() => handleNavigation('login')}
              className="w-full flex items-center p-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}