import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp, 
  Users, 
  Filter,
  Award,
  Target,
  Flame,
  Zap,
  Sword,
  Shield,
  Brain,
  Sparkles,
  ChevronDown,
  Search,
  UserPlus,
  Swords
} from 'lucide-react';

interface LeaderboardScreenProps {
  onNavigate: (screen: string) => void;
  onCompare: (targetUser: any) => void;
}

export default function LeaderboardScreen({ onNavigate, onCompare }: LeaderboardScreenProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [searchTerm, setSearchTerm] = useState('');

  const leaderboardData = [
    { 
      rank: 1, 
      name: 'Sarah Chen', 
      grade: '12th', 
      xp: 3250, 
      level: 12, 
      badges: 18, 
      avatar: 'SC',
      change: 'up',
      activities: 42,
      streak: 15,
      olympiads: 8,
      competitions: 12,
      title: 'Math Olympiad Champion'
    },
    { 
      rank: 2, 
      name: 'Marcus Johnson', 
      grade: '11th', 
      xp: 3180, 
      level: 11, 
      badges: 16, 
      avatar: 'MJ',
      change: 'same',
      activities: 38,
      streak: 12,
      olympiads: 6,
      competitions: 10,
      title: 'Science Prodigy'
    },
    { 
      rank: 3, 
      name: 'Emma Rodriguez', 
      grade: '10th', 
      xp: 2950, 
      level: 10, 
      badges: 15, 
      avatar: 'ER',
      change: 'up',
      activities: 35,
      streak: 8,
      olympiads: 5,
      competitions: 9,
      title: 'Community Leader'
    },
    { 
      rank: 4, 
      name: 'Alex Thompson', 
      grade: '12th', 
      xp: 2800, 
      level: 9, 
      badges: 14, 
      avatar: 'AT',
      change: 'down',
      activities: 33,
      streak: 5,
      olympiads: 4,
      competitions: 8,
      title: 'Debate Master'
    },
    { 
      rank: 5, 
      name: 'Priya Patel', 
      grade: '11th', 
      xp: 2750, 
      level: 9, 
      badges: 13, 
      avatar: 'PP',
      change: 'up',
      activities: 31,
      streak: 10,
      olympiads: 7,
      competitions: 6,
      title: 'Physics Expert'
    },
    { 
      rank: 6, 
      name: 'David Kim', 
      grade: '10th', 
      xp: 2680, 
      level: 9, 
      badges: 12, 
      avatar: 'DK',
      change: 'same',
      activities: 29,
      streak: 7,
      olympiads: 3,
      competitions: 11,
      title: 'Code Warrior'
    },
    { 
      rank: 7, 
      name: 'Alex Johnson', 
      grade: '11th', 
      xp: 2450, 
      level: 8, 
      badges: 12, 
      avatar: 'AJ',
      change: 'up',
      activities: 24,
      streak: 6,
      olympiads: 2,
      competitions: 5,
      isCurrentUser: true,
      title: 'Rising Star'
    },
    { 
      rank: 8, 
      name: 'Sophie Wilson', 
      grade: '9th', 
      xp: 2350, 
      level: 8, 
      badges: 11, 
      avatar: 'SW',
      change: 'down',
      activities: 26,
      streak: 4,
      olympiads: 1,
      competitions: 7,
      title: 'Academic Achiever'
    },
  ];

  const categories = [
    { id: 'overall', name: 'Overall', icon: Trophy, description: 'All activities combined' },
    { id: 'academic', name: 'Academic', icon: Brain, description: 'Academic competitions & activities' },
    { id: 'olympiads', name: 'Olympiads', icon: Target, description: 'International competitions' },
    { id: 'community', name: 'Community Service', icon: Users, description: 'Volunteer work & service' },
    { id: 'competitions', name: 'Live Battles', icon: Sword, description: 'Real-time competitions' },
    { id: 'leadership', name: 'Leadership', icon: Crown, description: 'Leadership roles & projects' },
  ];

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'semester', name: 'This Semester' },
    { id: 'year', name: 'This Year' },
    { id: 'alltime', name: 'All Time' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: 
        return <Crown className="w-8 h-8 text-yellow-500 animate-pulse" />;
      case 2: 
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3: 
        return <Award className="w-8 h-8 text-amber-600" />;
      default: 
        return <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">#{rank}</span>;
    }
  };

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full" />;
    }
  };

  const getTitleColor = (title: string) => {
    if (title.includes('Champion') || title.includes('Master')) return 'text-yellow-600 dark:text-yellow-400';
    if (title.includes('Expert') || title.includes('Prodigy')) return 'text-purple-600 dark:text-purple-400';
    if (title.includes('Leader')) return 'text-green-600 dark:text-green-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  const topThree = leaderboardData.slice(0, 3);
  const restOfList = leaderboardData.slice(3);

  const filteredData = leaderboardData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-yellow-900 dark:to-orange-900">
      {/* Enhanced Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  🏆 Global Leaderboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Compete with students worldwide
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl flex items-center animate-pulse">
                <Flame className="w-4 h-4 mr-2" />
                <span className="font-semibold">Live Rankings</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full appearance-none bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {periods.map((period) => (
                  <option key={period.id} value={period.id}>
                    {period.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Enhanced Top 3 Podium */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-2xl font-inter font-bold text-gray-900 dark:text-white mb-8 text-center">
            🏆 Champions Podium 🏆
          </h3>
          
          <div className="flex items-end justify-center space-x-8">
            {/* 2nd Place */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-500 rounded-3xl flex items-center justify-center text-white text-2xl font-bold mb-4 transform -translate-y-4 shadow-2xl">
                  {topThree[1]?.avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <Medal className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-2xl p-6 text-white min-h-[100px] flex flex-col justify-center shadow-xl">
                <p className="font-bold text-lg">{topThree[1]?.name}</p>
                <p className="text-gray-100 text-sm">{topThree[1]?.title}</p>
                <p className="text-sm opacity-90">{topThree[1]?.xp} XP</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mb-4 transform -translate-y-8 shadow-2xl animate-glow">
                  {topThree[0]?.avatar}
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-800" />
                </div>
              </div>
              <div className="bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-2xl p-8 text-white min-h-[120px] flex flex-col justify-center shadow-xl">
                <Crown className="w-10 h-10 mx-auto mb-2" />
                <p className="font-bold text-xl">{topThree[0]?.name}</p>
                <p className="text-yellow-100 text-sm">{topThree[0]?.title}</p>
                <p className="text-lg opacity-90">{topThree[0]?.xp} XP</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl flex items-center justify-center text-white text-2xl font-bold mb-4 transform -translate-y-2 shadow-2xl">
                  {topThree[2]?.avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="bg-gradient-to-t from-amber-700 to-amber-600 rounded-t-2xl p-6 text-white min-h-[80px] flex flex-col justify-center shadow-xl">
                <p className="font-bold text-lg">{topThree[2]?.name}</p>
                <p className="text-amber-100 text-sm">{topThree[2]?.title}</p>
                <p className="text-sm opacity-90">{topThree[2]?.xp} XP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Full Leaderboard */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredData.map((student, index) => (
              <div 
                key={index} 
                className={`p-6 transition-all duration-300 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 ${
                  student.isCurrentUser 
                    ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-l-4 border-primary-500' 
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-16 h-16">
                      {getRankIcon(student.rank)}
                    </div>

                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                      student.rank <= 3 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                        : student.isCurrentUser
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                        : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                      {student.avatar}
                    </div>

                    {/* Student Info */}
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-xl font-bold ${
                          student.isCurrentUser 
                            ? 'text-primary-700 dark:text-primary-300' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {student.name}
                          {student.isCurrentUser && (
                            <span className="ml-3 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                              You
                            </span>
                          )}
                        </h3>
                        {student.streak > 0 && (
                          <div className="flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                            <Flame className="w-4 h-4 mr-1" />
                            {student.streak} day streak
                          </div>
                        )}
                      </div>
                      <p className={`text-sm font-medium mb-1 ${getTitleColor(student.title)}`}>
                        {student.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {student.grade} Grade • Level {student.level}
                      </p>
                    </div>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center space-x-8">
                    <div className="hidden lg:grid grid-cols-4 gap-6 text-center">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Activities</p>
                        <p className="font-bold text-gray-900 dark:text-white">{student.activities}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Olympiads</p>
                        <p className="font-bold text-gray-900 dark:text-white">{student.olympiads}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Battles</p>
                        <p className="font-bold text-gray-900 dark:text-white">{student.competitions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Badges</p>
                        <p className="font-bold text-gray-900 dark:text-white">{student.badges}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total XP</p>
                      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{student.xp.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {getChangeIcon(student.change)}
                      {!student.isCurrentUser && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => onCompare(student)}
                            className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                            title="Compare profiles"
                          >
                            <Swords className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200"
                            title="Add friend"
                          >
                            <UserPlus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">24,847</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Worldwide</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Your Rank</h3>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">#7</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Top 0.03%</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Percentile</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">99.97%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Elite Tier</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Streak</h3>
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">6 days</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Keep it up!</p>
          </div>
        </div>
      </div>
    </div>
  );
}