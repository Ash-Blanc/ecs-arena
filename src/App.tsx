import React, { useState, useEffect } from 'react';
import { Sword, Trophy, Users, Activity, User, Menu, Home, Plus, ChevronRight, Zap, Target, Flame } from 'lucide-react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import OnboardingFlow from './components/OnboardingFlow';
import OnboardingModal from './components/OnboardingModal';
import Dashboard from './components/Dashboard';
import ProfileScreen from './components/ProfileScreen';
import ActivityManagement from './components/ActivityManagement';
import LeaderboardScreen from './components/LeaderboardScreen';
import OlympiadHub from './components/OlympiadHub';
import CompetitionArena from './components/CompetitionArena';
import ProfileComparison from './components/ProfileComparison';
import QuestSystem from './components/QuestSystem';
import MobileNavigation from './components/MobileNavigation';
import Sidebar from './components/Sidebar';
import NavigationHeader from './components/NavigationHeader';
import { ThemeProvider } from './contexts/ThemeContext';

type Screen = 'login' | 'register' | 'onboarding' | 'dashboard' | 'profile' | 'activities' | 'leaderboard' | 'olympiads' | 'competitions' | 'comparison' | 'quests';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState(null);
  const [comparisonTarget, setComparisonTarget] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  useEffect(() => {
    // Check if user should see onboarding
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (!onboardingCompleted && user && currentScreen === 'dashboard') {
      setShowOnboardingModal(true);
    }
  }, [user, currentScreen]);

  const handleProfileComparison = (targetUser: any) => {
    setComparisonTarget(targetUser);
    setCurrentScreen('comparison');
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setCurrentScreen('dashboard');
  };

  const screenComponents = {
    login: <LoginScreen onNavigate={setCurrentScreen} setUser={handleLogin} />,
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
      <div className="min-h-screen bg-gray-900">
        {isAuthenticated ? (
          <>
            {/* Navigation Header */}
            <NavigationHeader 
              onMenuToggle={() => setSidebarOpen(true)}
              user={user}
              currentScreen={currentScreen}
            />

            {/* Sidebar */}
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              currentScreen={currentScreen}
              onNavigate={setCurrentScreen}
              user={user}
            />

            {/* Main Content */}
            <main className="pb-20 md:pb-0">
              {screenComponents[currentScreen]}
            </main>

            {/* Mobile Navigation */}
            <MobileNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />

            {/* Onboarding Modal */}
            <OnboardingModal
              isOpen={showOnboardingModal}
              onClose={() => setShowOnboardingModal(false)}
              onComplete={() => setShowOnboardingModal(false)}
            />
          </>
        ) : (
          <>
            {/* Unauthenticated screens */}
            {screenComponents[currentScreen]}
          </>
        )}

        {/* Demo Navigation Panel - Simplified */}
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 p-4 max-w-xs">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <h3 className="font-bold text-sm text-white">Demo Navigation</h3>
            </div>
            <div className="space-y-1">
              {Object.keys(screenComponents).slice(0, 6).map((screen) => (
                <button
                  key={screen}
                  onClick={() => setCurrentScreen(screen as Screen)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    currentScreen === screen
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  {screen.charAt(0).toUpperCase() + screen.slice(1)}
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