import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Target, 
  Calendar, 
  Plus, 
  TrendingUp, 
  Star,
  Award,
  Activity,
  Users,
  Moon,
  Sun,
  Zap,
  Crown,
  Sword,
  Shield,
  Sparkles,
  Timer,
  Gift,
  Coins,
  Gem,
  Medal,
  Brain,
  Rocket
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DashboardProps {
  onNavigate: (screen: string) => void;
  user: any;
}

export default function Dashboard({ onNavigate, user }: DashboardProps) {
  const { isDark, toggleTheme } = useTheme();
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  const stats = [
    { label: 'Total XP', value: user?.xp || 2450, change: '+180', color: 'text-primary-600', icon: Zap },
    { label: 'Level', value: user?.level || 8, change: '+1', color: 'text-secondary-600', icon: Crown },
    { label: 'Badges', value: user?.badges || 12, change: '+2', color: 'text-accent-600', icon: Award },
    { label: 'Global Rank', value: '#7', change: '+3', color: 'text-purple-600', icon: Trophy },
  ];

  const recentActivities = [
    { 
      name: 'Math Olympiad Qualifier', 
      category: 'Academic', 
      xp: 150, 
      time: '2 hours ago', 
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      icon: Brain,
      difficulty: 'Expert'
    },
    { 
      name: 'Community Garden Project', 
      category: 'Community Service', 
      xp: 120, 
      time: '1 day ago', 
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      icon: Users,
      difficulty: 'Medium'
    },
    { 
      name: 'Physics Competition', 
      category: 'Science Olympiad', 
      xp: 200, 
      time: '2 days ago', 
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      icon: Rocket,
      difficulty: 'Expert'
    },
  ];

  const activeQuests = [
    { 
      title: 'Academic Excellence', 
      progress: 75, 
      reward: '100 XP + 50 Coins', 
      timeLeft: '18h', 
      type: 'daily',
      icon: Target
    },
    { 
      title: 'Olympiad Warrior', 
      progress: 40, 
      reward: '500 XP + 5 Gems', 
      timeLeft: '4d', 
      type: 'weekly',
      icon: Sword
    },
    { 
      title: 'Community Champion', 
      progress: 60, 
      reward: 'Legendary Badge', 
      timeLeft: 'No limit', 
      type: 'special',
      icon: Shield
    },
  ];

  const liveCompetitions = [
    { 
      name: 'Math Blitz Championship', 
      participants: 2847, 
      timeLeft: '2h 34m', 
      userRank: 23,
      prize: '$5,000',
      status: 'live'
    },
    { 
      name: 'Science Quiz Battle', 
      participants: 1523, 
      timeLeft: '45m', 
      userRank: 67,
      prize: '$3,000',
      status: 'live'
    },
  ];

  const weeklyData = [
    { day: 'Mon', xp: 120, activities: 2 },
    { day: 'Tue', xp: 180, activities: 3 },
    { day: 'Wed', xp: 250, activities: 4 },
    { day: 'Thu', xp: 200, activities: 3 },
    { day: 'Fri', xp: 150, activities: 2 },
    { day: 'Sat', xp: 300, activities: 5 },
    { day: 'Sun', xp: 220, activities: 3 },
  ];

  const maxXP = Math.max(...weeklyData.map(d => d.xp));

  const getQuestTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'weekly': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'special': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Enhanced Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  Welcome back, {user?.name?.split(' ')[0] || 'Champion'}! 🚀
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {user?.school || 'Lincoln High School'} • Level {user?.level || 8} • {user?.streak || 6} day streak 🔥
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-xl flex items-center animate-pulse-slow">
                  <Coins className="w-4 h-4 mr-2" />
                  <span className="font-semibold">1,250</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl flex items-center animate-pulse-slow">
                  <Gem className="w-4 h-4 mr-2" />
                  <span className="font-semibold">45</span>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-xl flex items-center">
                  <Flame className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{user?.xp || 2450} XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Level Progress Bar */}
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Level {user?.level || 8} Progress
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {(user?.xp || 2450) % 1000} / 1000 XP
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500 animate-glow"
                style={{ width: `${((user?.xp || 2450) % 1000) / 10}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${stat.color} dark:${stat.color.replace('600', '400')}`} />
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </h3>
                <p className={`text-3xl font-bold ${stat.color} dark:${stat.color.replace('600', '400')}`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Weekly Progress Chart */}
          <div className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                Weekly Progress
              </h2>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  +25% from last week
                </span>
              </div>
            </div>
            
            <div className="flex items-end justify-between h-48 mb-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative">
                    <div
                      className="w-12 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t-lg mb-2 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                      style={{ height: `${(day.xp / maxXP) * 140}px` }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {day.xp} XP
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {day.day}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {day.activities} activities
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => onNavigate('activities')}
                className="w-full flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Plus className="w-5 h-5 mr-3" />
                <span className="font-medium">Log New Activity</span>
              </button>
              <button
                onClick={() => onNavigate('olympiads')}
                className="w-full flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Target className="w-5 h-5 mr-3" />
                <span className="font-medium">Join Olympiad</span>
              </button>
              <button
                onClick={() => onNavigate('competitions')}
                className="w-full flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Sword className="w-5 h-5 mr-3" />
                <span className="font-medium">Battle Arena</span>
              </button>
              <button
                onClick={() => onNavigate('quests')}
                className="w-full flex items-center bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                <span className="font-medium">View Quests</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Quests Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
              Active Quests
            </h2>
            <button
              onClick={() => onNavigate('quests')}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
            >
              View All
              <TrendingUp className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {activeQuests.map((quest, index) => {
              const IconComponent = quest.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQuestTypeColor(quest.type)}`}>
                      {quest.type.charAt(0).toUpperCase() + quest.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="font-inter font-bold text-gray-900 dark:text-white mb-2">
                    {quest.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="font-medium text-gray-900 dark:text-white">{quest.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${quest.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Reward</span>
                      <span className="font-medium text-gray-900 dark:text-white">{quest.reward}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Time Left</span>
                      <span className="font-medium text-orange-600 dark:text-orange-400">{quest.timeLeft}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Competitions & Recent Activities */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Live Competitions */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                🔴 Live Competitions
              </h2>
              <button
                onClick={() => onNavigate('competitions')}
                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium text-sm"
              >
                Join Battle
              </button>
            </div>
            <div className="space-y-4">
              {liveCompetitions.map((comp, index) => (
                <div key={index} className="flex items-center p-4 bg-red-50/50 dark:bg-red-900/20 rounded-xl border border-red-200/50 dark:border-red-800/50">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-4"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {comp.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{comp.participants.toLocaleString()} players</span>
                      <span>Rank #{comp.userRank}</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">{comp.timeLeft}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 dark:text-green-400">{comp.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-6">
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-600/50 transition-colors duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {activity.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${activity.color}`}>
                          {activity.category}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {activity.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        +{activity.xp} XP
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}