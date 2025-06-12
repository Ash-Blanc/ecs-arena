import React from 'react';
import { Menu, Bell, Search, Coins, Gem } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationHeaderProps {
  onMenuToggle: () => void;
  user: any;
  currentScreen: string;
}

export default function NavigationHeader({ onMenuToggle, user, currentScreen }: NavigationHeaderProps) {
  const { isDark } = useTheme();

  const getScreenTitle = (screen: string) => {
    switch (screen) {
      case 'dashboard': return 'Dashboard';
      case 'olympiads': return 'Olympiad Hub';
      case 'competitions': return 'Battle Arena';
      case 'quests': return 'Quest System';
      case 'leaderboard': return 'Global Leaderboard';
      case 'activities': return 'Activity Management';
      case 'profile': return 'Profile';
      case 'comparison': return 'Profile Comparison';
      default: return 'ECS Arena';
    }
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 px-4 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 mr-4"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div>
            <h1 className="text-white font-bold text-xl">{getScreenTitle(currentScreen)}</h1>
            <p className="text-gray-400 text-sm">Welcome back, {user?.name?.split(' ')[0] || 'Champion'}</p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search competitions, activities..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Currency Display */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg px-3 py-2">
              <Coins className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-sm">1,250</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-3 py-2">
              <Gem className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-white font-semibold text-sm">45</span>
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0) || 'A'}
          </div>
        </div>
      </div>
    </header>
  );
}