import React from 'react';
import { Home, Trophy, User, Plus, Activity, Target, Sword, Flame, Crown } from 'lucide-react';

interface MobileNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function MobileNavigation({ currentScreen, onNavigate }: MobileNavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'olympiads', label: 'Olympiads', icon: Target },
    { id: 'add', label: 'Add', icon: Plus, isAction: true },
    { id: 'competitions', label: 'Battle', icon: Sword },
    { id: 'leaderboard', label: 'Rankings', icon: Trophy },
  ];

  const handleNavigation = (itemId: string) => {
    if (itemId === 'add') {
      // Navigate to activities screen and trigger add form
      onNavigate('activities');
    } else {
      onNavigate(itemId);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-3 md:hidden z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentScreen === item.id || (item.id === 'add' && currentScreen === 'activities');
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center justify-center p-3 min-w-[70px] transition-all duration-300 transform ${
                item.isAction
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl transform -translate-y-3 shadow-2xl hover:shadow-3xl hover:scale-110'
                  : isActive
                  ? 'text-primary-600 dark:text-primary-400 scale-110'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105'
              }`}
            >
              <IconComponent 
                className={`w-6 h-6 mb-1 ${
                  item.isAction ? 'transform scale-125' : ''
                }`} 
              />
              <span className={`text-xs font-medium ${
                item.isAction ? 'text-white' : ''
              }`}>
                {item.label}
              </span>
              
              {isActive && !item.isAction && (
                <div className="absolute bottom-1 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}