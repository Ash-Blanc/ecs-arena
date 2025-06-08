import React, { useState } from 'react';
import { Target, Trophy, Calendar, Clock, Users, Star, Medal, Zap, Brain, Atom, Calculator, Globe, Palette, Music, Code, Microscope, BookOpen, Award, TrendingUp, Siren as Fire, Crown, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

interface OlympiadHubProps {
  onNavigate: (screen: string) => void;
  user: any;
}

export default function OlympiadHub({ onNavigate, user }: OlympiadHubProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('discover');

  const olympiadCategories = [
    { id: 'all', name: 'All Olympiads', icon: Target, color: 'text-gray-600', count: 24 },
    { id: 'math', name: 'Mathematics', icon: Calculator, color: 'text-blue-600', count: 8 },
    { id: 'science', name: 'Science', icon: Atom, color: 'text-green-600', count: 6 },
    { id: 'physics', name: 'Physics', icon: Zap, color: 'text-purple-600', count: 4 },
    { id: 'chemistry', name: 'Chemistry', icon: Microscope, color: 'text-red-600', count: 3 },
    { id: 'biology', name: 'Biology', icon: Brain, color: 'text-emerald-600', count: 3 },
    { id: 'computer', name: 'Computer Science', icon: Code, color: 'text-indigo-600', count: 5 },
    { id: 'geography', name: 'Geography', icon: Globe, color: 'text-orange-600', count: 2 },
    { id: 'literature', name: 'Literature', icon: BookOpen, color: 'text-pink-600', count: 3 },
  ];

  const featuredOlympiads = [
    {
      id: 1,
      name: 'International Mathematical Olympiad',
      category: 'math',
      difficulty: 'Expert',
      participants: 15420,
      deadline: '2024-04-15',
      prize: '$50,000',
      status: 'registration',
      description: 'The most prestigious mathematics competition for high school students worldwide.',
      requirements: ['Grade 9-12', 'National qualification required', 'Advanced mathematics knowledge'],
      pastWinners: 156,
      averageScore: 42.5,
      timeLimit: '4.5 hours',
      problems: 6,
      image: 'https://images.pexels.com/photos/6256/mathematics-blackboard-education-classroom.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'International Physics Olympiad',
      category: 'physics',
      difficulty: 'Expert',
      participants: 12800,
      deadline: '2024-04-20',
      prize: '$40,000',
      status: 'registration',
      description: 'Challenge your understanding of physics with complex theoretical and experimental problems.',
      requirements: ['Grade 10-12', 'Strong physics background', 'Laboratory experience'],
      pastWinners: 134,
      averageScore: 38.2,
      timeLimit: '5 hours',
      problems: 3,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'International Olympiad in Informatics',
      category: 'computer',
      difficulty: 'Expert',
      participants: 18500,
      deadline: '2024-04-25',
      prize: '$60,000',
      status: 'active',
      description: 'Programming competition focusing on algorithmic problem solving and computational thinking.',
      requirements: ['Programming experience', 'Algorithm knowledge', 'Data structures mastery'],
      pastWinners: 89,
      averageScore: 445,
      timeLimit: '5 hours',
      problems: 4,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const myOlympiads = [
    {
      id: 1,
      name: 'National Mathematics Competition',
      category: 'math',
      status: 'completed',
      score: 87,
      rank: 23,
      totalParticipants: 1250,
      date: '2024-03-10',
      medal: 'gold',
      xpEarned: 500
    },
    {
      id: 2,
      name: 'Regional Physics Challenge',
      category: 'physics',
      status: 'in-progress',
      currentRound: 2,
      totalRounds: 3,
      deadline: '2024-04-05',
      estimatedRank: 15
    },
    {
      id: 3,
      name: 'Computer Science Olympiad Prep',
      category: 'computer',
      status: 'registered',
      startDate: '2024-04-15',
      preparationTime: '2 weeks'
    }
  ];

  const upcomingDeadlines = [
    { name: 'International Chemistry Olympiad', deadline: '2024-04-12', daysLeft: 8, category: 'chemistry' },
    { name: 'Biology Bowl Registration', deadline: '2024-04-18', daysLeft: 14, category: 'biology' },
    { name: 'Geography Bee Qualifier', deadline: '2024-04-22', daysLeft: 18, category: 'geography' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registration': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'completed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'registered': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getMedalIcon = (medal: string) => {
    switch (medal) {
      case 'gold': return <Crown className="w-5 h-5 text-yellow-500" />;
      case 'silver': return <Medal className="w-5 h-5 text-gray-400" />;
      case 'bronze': return <Award className="w-5 h-5 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Animated Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  Olympiad Hub
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Compete in prestigious academic competitions worldwide
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-accent-500 to-orange-500 text-white px-4 py-2 rounded-xl flex items-center animate-pulse-slow">
                <Fire className="w-4 h-4 mr-2" />
                <span className="font-semibold">Hot Competitions</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-1 backdrop-blur-sm">
            {[
              { id: 'discover', label: 'Discover', icon: Target },
              { id: 'my-olympiads', label: 'My Olympiads', icon: Trophy },
              { id: 'deadlines', label: 'Deadlines', icon: Clock },
              { id: 'achievements', label: 'Achievements', icon: Star },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
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
        {activeTab === 'discover' && (
          <>
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {olympiadCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                          : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.name}
                      <span className="ml-2 px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Olympiads */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredOlympiads.map((olympiad) => (
                <div
                  key={olympiad.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  {/* Olympiad Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={olympiad.image}
                      alt={olympiad.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(olympiad.difficulty)}`}>
                        {olympiad.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(olympiad.status)}`}>
                        {olympiad.status.charAt(0).toUpperCase() + olympiad.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {olympiad.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {olympiad.description}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="text-xs">Participants</span>
                        </div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {olympiad.participants.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                          <Trophy className="w-4 h-4 mr-1" />
                          <span className="text-xs">Prize Pool</span>
                        </div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {olympiad.prize}
                        </p>
                      </div>
                      <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-xs">Duration</span>
                        </div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {olympiad.timeLimit}
                        </p>
                      </div>
                      <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-xs">Deadline</span>
                        </div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {new Date(olympiad.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                      {olympiad.status === 'registration' ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Register Now
                        </>
                      ) : olympiad.status === 'active' ? (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Join Competition
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Learn More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'my-olympiads' && (
          <div className="space-y-6">
            {myOlympiads.map((olympiad) => (
              <div
                key={olympiad.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white">
                        {olympiad.name}
                      </h3>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(olympiad.status)}`}>
                        {olympiad.status.charAt(0).toUpperCase() + olympiad.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  {olympiad.medal && (
                    <div className="flex items-center">
                      {getMedalIcon(olympiad.medal)}
                      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {olympiad.medal.charAt(0).toUpperCase() + olympiad.medal.slice(1)} Medal
                      </span>
                    </div>
                  )}
                </div>

                {olympiad.status === 'completed' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {olympiad.score}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                        #{olympiad.rank}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rank</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                        +{olympiad.xpEarned}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">XP Earned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {((olympiad.rank / olympiad.totalParticipants) * 100).toFixed(1)}%
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Percentile</p>
                    </div>
                  </div>
                )}

                {olympiad.status === 'in-progress' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Round {olympiad.currentRound} of {olympiad.totalRounds}
                      </span>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        Estimated Rank: #{olympiad.estimatedRank}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(olympiad.currentRound / olympiad.totalRounds) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'deadlines' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingDeadlines.map((deadline, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    deadline.daysLeft <= 7 ? 'bg-red-100 dark:bg-red-900' : 'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    <Calendar className={`w-6 h-6 ${
                      deadline.daysLeft <= 7 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    deadline.daysLeft <= 7 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {deadline.daysLeft} days left
                  </span>
                </div>
                <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-2">
                  {deadline.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Deadline: {new Date(deadline.deadline).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}