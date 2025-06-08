import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Star, 
  Target, 
  Award, 
  TrendingUp, 
  TrendingDown,
  Minus,
  Crown,
  Medal,
  Zap,
  Brain,
  Flame,
  Shield,
  Sword,
  ArrowLeft,
  Sparkles,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface ProfileComparisonProps {
  onNavigate: (screen: string) => void;
  user: any;
  targetUser: any;
}

export default function ProfileComparison({ onNavigate, user, targetUser }: ProfileComparisonProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for comparison
  const currentUser = {
    name: user?.name || 'Alex Johnson',
    avatar: 'AJ',
    level: user?.level || 8,
    xp: user?.xp || 2450,
    rank: 7,
    badges: user?.badges || 12,
    activities: 24,
    streak: 6,
    school: user?.school || 'Lincoln High School',
    grade: user?.grade || '11th',
    joinDate: '2023-09-15',
    stats: {
      academic: { score: 850, rank: 12, activities: 8 },
      community: { score: 920, rank: 5, activities: 6 },
      sports: { score: 780, rank: 23, activities: 5 },
      arts: { score: 650, rank: 45, activities: 3 },
      leadership: { score: 890, rank: 8, activities: 2 }
    },
    achievements: [
      { name: 'Math Olympiad Gold', rarity: 'legendary', earned: true },
      { name: 'Community Hero', rarity: 'epic', earned: true },
      { name: 'Debate Champion', rarity: 'rare', earned: true },
      { name: 'Science Fair Winner', rarity: 'uncommon', earned: true }
    ],
    recentActivities: [
      { name: 'Math Competition', xp: 150, date: '2024-03-10' },
      { name: 'Volunteer Work', xp: 100, date: '2024-03-08' },
      { name: 'Science Project', xp: 120, date: '2024-03-05' }
    ]
  };

  const comparisonUser = targetUser || {
    name: 'Sarah Chen',
    avatar: 'SC',
    level: 12,
    xp: 3250,
    rank: 1,
    badges: 18,
    activities: 42,
    streak: 15,
    school: 'Lincoln High School',
    grade: '12th',
    joinDate: '2023-08-20',
    stats: {
      academic: { score: 980, rank: 2, activities: 15 },
      community: { score: 950, rank: 3, activities: 12 },
      sports: { score: 820, rank: 18, activities: 8 },
      arts: { score: 890, rank: 12, activities: 5 },
      leadership: { score: 950, rank: 2, activities: 2 }
    },
    achievements: [
      { name: 'Physics Olympiad Gold', rarity: 'legendary', earned: true },
      { name: 'Perfect Attendance', rarity: 'epic', earned: true },
      { name: 'Student Council President', rarity: 'rare', earned: true },
      { name: 'Academic Excellence', rarity: 'epic', earned: true }
    ],
    recentActivities: [
      { name: 'Physics Olympiad', xp: 200, date: '2024-03-12' },
      { name: 'Leadership Workshop', xp: 180, date: '2024-03-10' },
      { name: 'Community Service', xp: 150, date: '2024-03-08' }
    ]
  };

  const getComparisonIcon = (value1: number, value2: number) => {
    if (value1 > value2) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (value1 < value2) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  const getComparisonColor = (value1: number, value2: number, isHigherBetter = true) => {
    if (isHigherBetter) {
      if (value1 > value2) return 'text-green-600 dark:text-green-400';
      if (value1 < value2) return 'text-red-600 dark:text-red-400';
    } else {
      if (value1 < value2) return 'text-green-600 dark:text-green-400';
      if (value1 > value2) return 'text-red-600 dark:text-red-400';
    }
    return 'text-gray-600 dark:text-gray-400';
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700';
      case 'uncommon': return 'border-green-300 bg-green-50 dark:border-green-600 dark:bg-green-900';
      case 'rare': return 'border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-900';
      case 'epic': return 'border-purple-300 bg-purple-50 dark:border-purple-600 dark:bg-purple-900';
      case 'legendary': return 'border-yellow-300 bg-yellow-50 dark:border-yellow-600 dark:bg-yellow-900';
      default: return 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700';
    }
  };

  const categories = [
    { id: 'academic', name: 'Academic', icon: Brain, color: 'text-blue-600' },
    { id: 'community', name: 'Community', icon: Users, color: 'text-green-600' },
    { id: 'sports', name: 'Sports', icon: Trophy, color: 'text-orange-600' },
    { id: 'arts', name: 'Arts', icon: Sparkles, color: 'text-purple-600' },
    { id: 'leadership', name: 'Leadership', icon: Crown, color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      {/* Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <button
                onClick={() => onNavigate('leaderboard')}
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  Profile Comparison
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Compare achievements and progress
                </p>
              </div>
            </div>
          </div>

          {/* User Comparison Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Current User */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mr-4">
                  {currentUser.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentUser.name}</h3>
                  <p className="text-blue-100">Level {currentUser.level} • Rank #{currentUser.rank}</p>
                  <p className="text-blue-100 text-sm">{currentUser.school}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{currentUser.xp}</p>
                  <p className="text-blue-100 text-sm">XP</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{currentUser.badges}</p>
                  <p className="text-blue-100 text-sm">Badges</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{currentUser.activities}</p>
                  <p className="text-blue-100 text-sm">Activities</p>
                </div>
              </div>
            </div>

            {/* Comparison User */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mr-4">
                  {comparisonUser.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{comparisonUser.name}</h3>
                  <p className="text-purple-100">Level {comparisonUser.level} • Rank #{comparisonUser.rank}</p>
                  <p className="text-purple-100 text-sm">{comparisonUser.school}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{comparisonUser.xp}</p>
                  <p className="text-purple-100 text-sm">XP</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{comparisonUser.badges}</p>
                  <p className="text-purple-100 text-sm">Badges</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{comparisonUser.activities}</p>
                  <p className="text-purple-100 text-sm">Activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-1 backdrop-blur-sm">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'categories', label: 'Categories', icon: PieChart },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'activities', label: 'Recent Activities', icon: Activity },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-600/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Stats Comparison */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                Performance Comparison
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Total XP', user1: currentUser.xp, user2: comparisonUser.xp },
                  { label: 'Level', user1: currentUser.level, user2: comparisonUser.level },
                  { label: 'School Rank', user1: currentUser.rank, user2: comparisonUser.rank, lowerBetter: true },
                  { label: 'Badges Earned', user1: currentUser.badges, user2: comparisonUser.badges },
                  { label: 'Activities Completed', user1: currentUser.activities, user2: comparisonUser.activities },
                  { label: 'Current Streak', user1: currentUser.streak, user2: comparisonUser.streak },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </span>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className={`font-bold ${getComparisonColor(stat.user1, stat.user2, !stat.lowerBetter)}`}>
                          {stat.user1}
                        </span>
                      </div>
                      <div className="w-8 flex justify-center">
                        {getComparisonIcon(stat.user1, stat.user2)}
                      </div>
                      <div className="text-left">
                        <span className={`font-bold ${getComparisonColor(stat.user2, stat.user1, !stat.lowerBetter)}`}>
                          {stat.user2}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                Level Progress
              </h3>
              <div className="space-y-8">
                {/* Current User Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {currentUser.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Level {currentUser.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(currentUser.xp % 1000) / 10}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <span>{currentUser.xp % 1000} XP</span>
                    <span>1000 XP</span>
                  </div>
                </div>

                {/* Comparison User Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {comparisonUser.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Level {comparisonUser.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(comparisonUser.xp % 1000) / 10}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <span>{comparisonUser.xp % 1000} XP</span>
                    <span>1000 XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const user1Stats = currentUser.stats[category.id];
              const user2Stats = comparisonUser.stats[category.id];
              
              return (
                <div
                  key={category.id}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gray-100 dark:bg-gray-700`}>
                      <IconComponent className={`w-6 h-6 ${category.color} dark:${category.color.replace('600', '400')}`} />
                    </div>
                    <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Score</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{currentUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user1Stats.score, user2Stats.score)}`}>
                            {user1Stats.score}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{comparisonUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user2Stats.score, user1Stats.score)}`}>
                            {user2Stats.score}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Rank</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{currentUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user1Stats.rank, user2Stats.rank, false)}`}>
                            #{user1Stats.rank}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{comparisonUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user2Stats.rank, user1Stats.rank, false)}`}>
                            #{user2Stats.rank}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Activities</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{currentUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user1Stats.activities, user2Stats.activities)}`}>
                            {user1Stats.activities}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{comparisonUser.name}</span>
                          <span className={`font-bold ${getComparisonColor(user2Stats.activities, user1Stats.activities)}`}>
                            {user2Stats.activities}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current User Achievements */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                {currentUser.name}'s Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentUser.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${getRarityColor(achievement.rarity)} text-center`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {achievement.name}
                    </h4>
                    <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {achievement.rarity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison User Achievements */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                {comparisonUser.name}'s Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {comparisonUser.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${getRarityColor(achievement.rarity)} text-center`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {achievement.name}
                    </h4>
                    <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {achievement.rarity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current User Activities */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                {currentUser.name}'s Recent Activities
              </h3>
              <div className="space-y-4">
                {currentUser.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {activity.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        +{activity.xp} XP
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison User Activities */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-6">
                {comparisonUser.name}'s Recent Activities
              </h3>
              <div className="space-y-4">
                {comparisonUser.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {activity.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        +{activity.xp} XP
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}