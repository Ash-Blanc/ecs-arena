import React, { useState } from 'react';
import { 
  User, 
  Award, 
  Star, 
  Calendar, 
  MapPin, 
  Edit3, 
  Camera,
  Trophy,
  Target,
  Activity,
  TrendingUp,
  Medal,
  Crown,
  Zap
} from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  user: any;
}

export default function ProfileScreen({ onNavigate, user }: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first activity', icon: Trophy, earned: true, rarity: 'common' },
    { id: 2, name: 'Dedicated', description: 'Log 50 activities', icon: Target, earned: true, rarity: 'uncommon' },
    { id: 3, name: 'Community Hero', description: '100 hours of community service', icon: Star, earned: true, rarity: 'rare' },
    { id: 4, name: 'Academic Excellence', description: 'Maintain 3.8+ GPA', icon: Medal, earned: true, rarity: 'epic' },
    { id: 5, name: 'Leader', description: 'Lead 5+ projects', icon: Crown, earned: false, rarity: 'legendary' },
    { id: 6, name: 'Overachiever', description: 'Reach Level 10', icon: Zap, earned: false, rarity: 'epic' },
  ];

  const activityHistory = [
    { date: '2024-03-10', activity: 'Debate Team Practice', category: 'Academic', xp: 50, duration: '2h' },
    { date: '2024-03-09', activity: 'Volunteer at Food Bank', category: 'Community Service', xp: 75, duration: '3h' },
    { date: '2024-03-08', activity: 'Soccer Training', category: 'Sports', xp: 60, duration: '2h' },
    { date: '2024-03-07', activity: 'Math Tutoring', category: 'Academic', xp: 40, duration: '1h' },
    { date: '2024-03-06', activity: 'Art Club Meeting', category: 'Arts', xp: 30, duration: '1.5h' },
  ];

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

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 dark:text-gray-400';
      case 'uncommon': return 'text-green-600 dark:text-green-400';
      case 'rare': return 'text-blue-600 dark:text-blue-400';
      case 'epic': return 'text-purple-600 dark:text-purple-400';
      case 'legendary': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
            Profile
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-600">
                  <Camera className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  {user?.name || 'Alex Johnson'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user?.school || 'Lincoln High School'} • {user?.grade || '11th'} Grade
                </p>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Level {user?.level || 8}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-accent-500 mr-1" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user?.xp || 2450} XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {user?.badges || 12}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Badges Earned</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                24
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Activities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                156
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hours Logged</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                #7
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">School Rank</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl mb-6 p-1 border border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'history', label: 'History', icon: Activity },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-inter font-semibold text-gray-900 dark:text-white mb-4">
                Activity Categories
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Community Service', hours: 45, color: 'bg-green-500', percentage: 75 },
                  { name: 'Academic', hours: 38, color: 'bg-blue-500', percentage: 63 },
                  { name: 'Sports', hours: 42, color: 'bg-orange-500', percentage: 70 },
                  { name: 'Arts', hours: 31, color: 'bg-purple-500', percentage: 52 },
                ].map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {category.hours}h
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${category.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-inter font-semibold text-gray-900 dark:text-white mb-4">
                Recent Achievements
              </h3>
              <div className="space-y-3">
                {achievements.filter(a => a.earned).slice(0, 4).map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={achievement.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${getRarityColor(achievement.rarity)}`}>
                        <IconComponent className={`w-5 h-5 ${getRarityTextColor(achievement.rarity)}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {achievement.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      achievement.earned
                        ? getRarityColor(achievement.rarity)
                        : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 opacity-60'
                    }`}
                  >
                    {!achievement.earned && (
                      <div className="absolute inset-0 bg-gray-500 bg-opacity-20 rounded-xl flex items-center justify-center">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Locked</span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                        achievement.earned ? getRarityColor(achievement.rarity) : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          achievement.earned ? getRarityTextColor(achievement.rarity) : 'text-gray-500'
                        }`} />
                      </div>
                      <h3 className="font-inter font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {achievement.description}
                      </p>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getRarityTextColor(achievement.rarity)} ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-inter font-semibold text-gray-900 dark:text-white">
                Activity History
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {activityHistory.map((item, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-lg flex items-center justify-center mr-4">
                        <Activity className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {item.activity}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.category} • {item.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        +{item.xp} XP
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}