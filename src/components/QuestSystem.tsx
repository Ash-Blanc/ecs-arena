import React, { useState } from 'react';
import { 
  Flame, 
  Target, 
  Trophy, 
  Star, 
  Clock, 
  Users, 
  Zap,
  Crown,
  Shield,
  Sword,
  Sparkles,
  Award,
  TrendingUp,
  Calendar,
  CheckCircle,
  Circle,
  Lock,
  Gift,
  Gem,
  Coins,
  Timer,
  MapPin,
  Flag
} from 'lucide-react';

interface QuestSystemProps {
  onNavigate: (screen: string) => void;
  user: any;
}

export default function QuestSystem({ onNavigate, user }: QuestSystemProps) {
  const [activeTab, setActiveTab] = useState('daily');
  const [selectedQuest, setSelectedQuest] = useState(null);

  const dailyQuests = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'Complete 2 academic activities today',
      progress: 1,
      target: 2,
      xpReward: 100,
      coinReward: 50,
      timeLeft: '18h 32m',
      difficulty: 'Easy',
      category: 'academic',
      completed: false,
      icon: Target
    },
    {
      id: 2,
      title: 'Community Helper',
      description: 'Log 3 hours of community service',
      progress: 1.5,
      target: 3,
      xpReward: 150,
      coinReward: 75,
      timeLeft: '18h 32m',
      difficulty: 'Medium',
      category: 'community',
      completed: false,
      icon: Users
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Read for 30 minutes',
      progress: 30,
      target: 30,
      xpReward: 75,
      coinReward: 25,
      timeLeft: 'Completed',
      difficulty: 'Easy',
      category: 'academic',
      completed: true,
      icon: Sparkles
    }
  ];

  const weeklyQuests = [
    {
      id: 4,
      title: 'Olympiad Warrior',
      description: 'Participate in 2 olympiad competitions',
      progress: 1,
      target: 2,
      xpReward: 500,
      coinReward: 200,
      gemReward: 5,
      timeLeft: '4d 12h',
      difficulty: 'Hard',
      category: 'competition',
      completed: false,
      icon: Crown
    },
    {
      id: 5,
      title: 'Social Butterfly',
      description: 'Connect with 5 new students',
      progress: 3,
      target: 5,
      xpReward: 300,
      coinReward: 150,
      timeLeft: '4d 12h',
      difficulty: 'Medium',
      category: 'social',
      completed: false,
      icon: Users
    },
    {
      id: 6,
      title: 'Streak Master',
      description: 'Maintain a 7-day activity streak',
      progress: 5,
      target: 7,
      xpReward: 400,
      coinReward: 175,
      gemReward: 3,
      timeLeft: '4d 12h',
      difficulty: 'Medium',
      category: 'consistency',
      completed: false,
      icon: Flame
    }
  ];

  const specialQuests = [
    {
      id: 7,
      title: 'Math Olympiad Champion',
      description: 'Win a gold medal in any mathematics competition',
      progress: 0,
      target: 1,
      xpReward: 1000,
      coinReward: 500,
      gemReward: 20,
      badgeReward: 'Math Legend',
      timeLeft: 'No limit',
      difficulty: 'Legendary',
      category: 'achievement',
      completed: false,
      icon: Trophy,
      requirements: ['Level 10+', 'Complete 5 math competitions', 'Score 90%+ average']
    },
    {
      id: 8,
      title: 'Community Leader',
      description: 'Complete 100 hours of community service',
      progress: 67,
      target: 100,
      xpReward: 800,
      coinReward: 400,
      gemReward: 15,
      badgeReward: 'Community Hero',
      timeLeft: 'No limit',
      difficulty: 'Epic',
      category: 'service',
      completed: false,
      icon: Shield,
      requirements: ['Level 8+', 'Join 3 service organizations']
    }
  ];

  const questChains = [
    {
      id: 'academic-mastery',
      title: 'Academic Mastery Chain',
      description: 'Complete a series of academic challenges',
      totalSteps: 5,
      currentStep: 3,
      steps: [
        { title: 'First Steps', completed: true, reward: '50 XP' },
        { title: 'Getting Serious', completed: true, reward: '100 XP' },
        { title: 'Academic Focus', completed: true, reward: '150 XP' },
        { title: 'Excellence Pursuit', completed: false, reward: '200 XP' },
        { title: 'Master Scholar', completed: false, reward: '500 XP + Legendary Badge' }
      ],
      category: 'academic',
      difficulty: 'Epic'
    },
    {
      id: 'social-impact',
      title: 'Social Impact Chain',
      description: 'Make a difference in your community',
      totalSteps: 4,
      currentStep: 2,
      steps: [
        { title: 'First Volunteer', completed: true, reward: '75 XP' },
        { title: 'Regular Helper', completed: true, reward: '125 XP' },
        { title: 'Community Champion', completed: false, reward: '250 XP' },
        { title: 'Change Maker', completed: false, reward: '400 XP + Epic Badge' }
      ],
      category: 'community',
      difficulty: 'Hard'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Hard': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Epic': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Legendary': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-2 border-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'text-blue-600 dark:text-blue-400';
      case 'community': return 'text-green-600 dark:text-green-400';
      case 'competition': return 'text-purple-600 dark:text-purple-400';
      case 'social': return 'text-pink-600 dark:text-pink-400';
      case 'consistency': return 'text-orange-600 dark:text-orange-400';
      case 'achievement': return 'text-yellow-600 dark:text-yellow-400';
      case 'service': return 'text-teal-600 dark:text-teal-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const renderQuestCard = (quest: any) => {
    const IconComponent = quest.icon;
    const progressPercentage = (quest.progress / quest.target) * 100;

    return (
      <div
        key={quest.id}
        className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
          quest.completed ? 'ring-2 ring-green-500/50' : ''
        }`}
      >
        {/* Quest Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
              quest.completed 
                ? 'bg-green-100 dark:bg-green-900' 
                : 'bg-gradient-to-r from-primary-500 to-secondary-500'
            }`}>
              {quest.completed ? (
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              ) : (
                <IconComponent className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white">
                {quest.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {quest.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quest.difficulty)}`}>
              {quest.difficulty}
            </span>
            {quest.timeLeft !== 'No limit' && (
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {quest.timeLeft}
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {!quest.completed && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">
                Progress: {quest.progress} / {quest.target}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Rewards */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-primary-500 mr-1" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {quest.xpReward} XP
              </span>
            </div>
            <div className="flex items-center">
              <Coins className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {quest.coinReward}
              </span>
            </div>
            {quest.gemReward && (
              <div className="flex items-center">
                <Gem className="w-4 h-4 text-purple-500 mr-1" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {quest.gemReward}
                </span>
              </div>
            )}
          </div>
          {quest.completed ? (
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
              <Gift className="w-4 h-4 mr-2" />
              Claim Reward
            </button>
          ) : (
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
              Track Progress
            </button>
          )}
        </div>

        {/* Special Quest Requirements */}
        {quest.requirements && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Requirements:</h4>
            <ul className="space-y-1">
              {quest.requirements.map((req, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                  <Circle className="w-3 h-3 mr-2" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
      {/* Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  Quest System
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete challenges and earn epic rewards
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-xl flex items-center">
                <Coins className="w-4 h-4 mr-2" />
                <span className="font-semibold">1,250 Coins</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl flex items-center">
                <Gem className="w-4 h-4 mr-2" />
                <span className="font-semibold">45 Gems</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-1 backdrop-blur-sm">
            {[
              { id: 'daily', label: 'Daily Quests', icon: Calendar },
              { id: 'weekly', label: 'Weekly Quests', icon: Target },
              { id: 'special', label: 'Special Quests', icon: Crown },
              { id: 'chains', label: 'Quest Chains', icon: Flag },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
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
        {activeTab === 'daily' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                Daily Quests
              </h2>
              <div className="flex items-center text-orange-600 dark:text-orange-400">
                <Timer className="w-5 h-5 mr-2" />
                <span className="font-medium">Resets in 18h 32m</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {dailyQuests.map(renderQuestCard)}
            </div>
          </div>
        )}

        {activeTab === 'weekly' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                Weekly Quests
              </h2>
              <div className="flex items-center text-orange-600 dark:text-orange-400">
                <Timer className="w-5 h-5 mr-2" />
                <span className="font-medium">Resets in 4d 12h</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {weeklyQuests.map(renderQuestCard)}
            </div>
          </div>
        )}

        {activeTab === 'special' && (
          <div className="space-y-6">
            <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
              Special Quests
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {specialQuests.map(renderQuestCard)}
            </div>
          </div>
        )}

        {activeTab === 'chains' && (
          <div className="space-y-8">
            <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
              Quest Chains
            </h2>
            {questChains.map((chain) => (
              <div
                key={chain.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-2">
                      {chain.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {chain.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(chain.difficulty)}`}>
                      {chain.difficulty}
                    </span>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {chain.currentStep} / {chain.totalSteps}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chain Progress */}
                <div className="space-y-4">
                  {chain.steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                        step.completed
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                          : index === chain.currentStep
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                          : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center mr-4">
                        {step.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : index === chain.currentStep ? (
                          <Circle className="w-6 h-6 text-blue-500" />
                        ) : (
                          <Lock className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Step {index + 1}: {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Reward: {step.reward}
                        </p>
                      </div>
                      {step.completed && (
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Claimed
                        </button>
                      )}
                      {index === chain.currentStep && !step.completed && (
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          In Progress
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}