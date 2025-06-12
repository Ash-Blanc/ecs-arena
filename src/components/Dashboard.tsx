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
    { label: 'Total XP', value: user?.xp || 2450, change: '+180', color: 'text-blue-400', icon: Zap },
    { label: 'Level', value: user?.level || 8, change: '+1', color: 'text-purple-400', icon: Crown },
    { label: 'Badges', value: user?.badges || 12, change: '+2', color: 'text-yellow-400', icon: Award },
    { label: 'Global Rank', value: '#7', change: '+3', color: 'text-green-400', icon: Trophy },
  ];

  const recentActivities = [
    { 
      name: 'Math Olympiad Qualifier', 
      category: 'Academic', 
      xp: 150, 
      time: '2 hours ago', 
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      icon: Brain,
      difficulty: 'Expert'
    },
    { 
      name: 'Community Garden Project', 
      category: 'Community Service', 
      xp: 120, 
      time: '1 day ago', 
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      icon: Users,
      difficulty: 'Medium'
    },
    { 
      name: 'Physics Competition', 
      category: 'Science Olympiad', 
      xp: 200, 
      time: '2 days ago', 
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
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
      case 'daily': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'weekly': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'special': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, {user?.name?.split(' ')[0] || 'Champion'}! 🚀
                </h1>
                <p className="text-gray-400 text-lg">
                  {user?.school || 'Lincoln High School'} • Level {user?.level || 8} • {user?.streak || 6} day streak 🔥
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-xl flex items-center">
                <Coins className="w-5 h-5 mr-2" />
                <span className="font-bold">1,250</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-xl flex items-center">
                <Gem className="w-5 h-5 mr-2" />
                <span className="font-bold">45</span>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-gray-800/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300 font-medium">
                Level {user?.level || 8} Progress
              </span>
              <span className="text-gray-400 text-sm">
                {(user?.xp || 2450) % 1000} / 1000 XP
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((user?.xp || 2450) % 1000) / 10}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-xs text-green-400 font-medium bg-green-500/20 border border-green-500/30 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">
                  {stat.label}
                </h3>
                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Progress Chart */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                Weekly Progress
              </h2>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400 font-medium">
                  +25% from last week
                </span>
              </div>
            </div>
            
            <div className="flex items-end justify-between h-48 mb-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative">
                    <div
                      className="w-12 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg mb-2 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                      style={{ height: `${(day.xp / maxXP) * 140}px` }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {day.xp} XP
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">
                    {day.day}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {day.activities} activities
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-white mb-6">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => onNavigate('activities')}
                className="w-full flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-3" />
                <span className="font-medium">Log New Activity</span>
              </button>
              <button
                onClick={() => onNavigate('olympiads')}
                className="w-full flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Target className="w-5 h-5 mr-3" />
                <span className="font-medium">Join Olympiad</span>
              </button>
              <button
                onClick={() => onNavigate('competitions')}
                className="w-full flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sword className="w-5 h-5 mr-3" />
                <span className="font-medium">Battle Arena</span>
              </button>
              <button
                onClick={() => onNavigate('quests')}
                className="w-full flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Flame className="w-5 h-5 mr-3" />
                <span className="font-medium">View Quests</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Quests Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              Active Quests
            </h2>
            <button
              onClick={() => onNavigate('quests')}
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
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
                  className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getQuestTypeColor(quest.type)}`}>
                      {quest.type.charAt(0).toUpperCase() + quest.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    {quest.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="font-medium text-white">{quest.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${quest.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Reward</span>
                      <span className="font-medium text-white">{quest.reward}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Time Left</span>
                      <span className="font-medium text-orange-400">{quest.timeLeft}</span>
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
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                🔴 Live Competitions
              </h2>
              <button
                onClick={() => onNavigate('competitions')}
                className="text-red-400 hover:text-red-300 font-medium text-sm"
              >
                Join Battle
              </button>
            </div>
            <div className="space-y-4">
              {liveCompetitions.map((comp, index) => (
                <div key={index} className="flex items-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-4"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">
                      {comp.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{comp.participants.toLocaleString()} players</span>
                      <span>Rank #{comp.userRank}</span>
                      <span className="text-red-400 font-medium">{comp.timeLeft}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-400">{comp.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-white mb-6">
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors duration-200">
                    <div className="w-12 h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {activity.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${activity.color}`}>
                          {activity.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {activity.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-400">
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