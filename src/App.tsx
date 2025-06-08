import React, { useState } from 'react';
import { Sword, Trophy, Users, Activity, User, Menu, Home, Plus, ChevronRight, Zap, Target, Flame } from 'lucide-react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import OnboardingFlow from './components/OnboardingFlow';
import Dashboard from './components/Dashboard';
import ProfileScreen from './components/ProfileScreen';
import ActivityManagement from './components/ActivityManagement';
import LeaderboardScreen from './components/LeaderboardScreen';
import OlympiadHub from './components/OlympiadHub';
import CompetitionArena from './components/CompetitionArena';
import ProfileComparison from './components/ProfileComparison';
import QuestSystem from './components/QuestSystem';
import MobileNavigation from './components/MobileNavigation';
import { ThemeProvider } from './contexts/ThemeContext';

type Screen = 'login' | 'register' | 'onboarding' | 'dashboard' | 'profile' | 'activities' | 'leaderboard' | 'olympiads' | 'competitions' | 'comparison' | 'quests';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState(null);
  const [comparisonTarget, setComparisonTarget] = useState(null);

  const handleProfileComparison = (targetUser: any) => {
    setComparisonTarget(targetUser);
    setCurrentScreen('comparison');
  };

  const screenComponents = {
    login: <LoginScreen onNavigate={setCurrentScreen} setUser={setUser} />,
    register: <RegisterScreen onNavigate={setCurrentScreen} />,
    onboarding: <OnboardingFlow onNavigate={setCurrentScreen} />,
    dashboard: <Dashboard onNavigate={setCurrentScreen} user={user} />,
    profile: <ProfileScreen onNavigate={setCurrentScreen} user={user} onCompare={handleProfileComparison} />,
    activities: <ActivityManagement onNavigate={setCurrentScreen} />,
    leaderboard: <LeaderboardScreen onNavigate={setCurrentScreen} onCompare={handleProfileComparison} />,
    olympiads: <OlympiadHub onNavigate={setCurrentScreen} user={user} />,
    competitions: <CompetitionArena onNavigate={setCurrentScreen} user={user} />,
    comparison: <ProfileComparison onNavigate={setCurrentScreen} user={user} targetUser={comparisonTarget} />,
    quests: <QuestSystem onNavigate={setCurrentScreen} user={user} />,
  };

  const isAuthenticated = ['dashboard', 'profile', 'activities', 'leaderboard', 'olympiads', 'competitions', 'comparison', 'quests'].includes(currentScreen);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-500">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Screen Content */}
        <div className={`relative z-10 ${isAuthenticated ? 'pb-20 md:pb-0' : ''}`}>
          {screenComponents[currentScreen]}
        </div>

        {/* Mobile Navigation - Only show for authenticated screens */}
        {isAuthenticated && (
          <MobileNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}

        {/* Enhanced Demo Navigation Panel */}
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 max-w-xs">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-inter font-bold text-sm text-gray-900 dark:text-white">
                Demo Navigation
              </h3>
            </div>
            <div className="space-y-2">
              {Object.keys(screenComponents).map((screen) => (
                <button
                  key={screen}
                  onClick={() => setCurrentScreen(screen as Screen)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    currentScreen === screen
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    {screen === 'olympiads' && <Target className="w-4 h-4 mr-2" />}
                    {screen === 'competitions' && <Trophy className="w-4 h-4 mr-2" />}
                    {screen === 'comparison' && <Users className="w-4 h-4 mr-2" />}
                    {screen === 'quests' && <Flame className="w-4 h-4 mr-2" />}
                    {screen.charAt(0).toUpperCase() + screen.slice(1)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;