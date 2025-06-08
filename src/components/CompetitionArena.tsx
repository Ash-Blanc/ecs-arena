import React, { useState } from 'react';
import { 
  Sword, 
  Trophy, 
  Users, 
  Zap, 
  Target, 
  Clock, 
  Star,
  Crown,
  Shield,
  Flame,
  Award,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Medal,
  Gamepad2,
  Brain,
  Timer,
  Sparkles
} from 'lucide-react';

interface CompetitionArenaProps {
  onNavigate: (screen: string) => void;
  user: any;
}

export default function CompetitionArena({ onNavigate, user }: CompetitionArenaProps) {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedTournament, setSelectedTournament] = useState(null);

  const liveCompetitions = [
    {
      id: 1,
      name: 'Math Blitz Championship',
      type: 'speed-math',
      participants: 2847,
      timeLeft: '2h 34m',
      prize: '$5,000',
      difficulty: 'Advanced',
      status: 'live',
      currentRound: 3,
      totalRounds: 5,
      userRank: 23,
      description: 'Fast-paced mathematical problem solving competition',
      rules: ['60 seconds per problem', 'No calculators allowed', 'Multiple choice format'],
      image: 'https://images.pexels.com/photos/6256/mathematics-blackboard-education-classroom.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Science Quiz Battle Royale',
      type: 'quiz-battle',
      participants: 1523,
      timeLeft: '45m',
      prize: '$3,000',
      difficulty: 'Intermediate',
      status: 'live',
      currentRound: 2,
      totalRounds: 4,
      userRank: 67,
      description: 'Multi-subject science knowledge competition',
      rules: ['30 seconds per question', 'Elimination rounds', 'Physics, Chemistry, Biology'],
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Code Sprint Arena',
      type: 'programming',
      participants: 3421,
      timeLeft: '1h 15m',
      prize: '$8,000',
      difficulty: 'Expert',
      status: 'live',
      currentRound: 1,
      totalRounds: 3,
      userRank: 156,
      description: 'Algorithmic programming competition',
      rules: ['3 problems to solve', '90 minutes total', 'Any programming language'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const upcomingTournaments = [
    {
      id: 4,
      name: 'Global Geography Championship',
      type: 'geography',
      startTime: '2024-04-15 14:00',
      registrations: 1847,
      maxParticipants: 5000,
      prize: '$10,000',
      difficulty: 'Advanced',
      format: 'Bracket Tournament',
      duration: '3 hours',
      description: 'Test your knowledge of world geography, capitals, and landmarks',
      requirements: ['High school level', 'Geography knowledge', 'Map reading skills']
    },
    {
      id: 5,
      name: 'Literature Analysis Duel',
      type: 'literature',
      startTime: '2024-04-16 16:00',
      registrations: 892,
      maxParticipants: 2000,
      prize: '$4,000',
      difficulty: 'Expert',
      format: '1v1 Elimination',
      duration: '2 hours',
      description: 'Analyze literary works and compete in interpretation challenges',
      requirements: ['Advanced reading level', 'Literary analysis skills', 'Critical thinking']
    }
  ];

  const myCompetitions = [
    {
      id: 1,
      name: 'Physics Problem Solving',
      status: 'completed',
      rank: 12,
      totalParticipants: 456,
      score: 847,
      xpEarned: 350,
      medal: 'gold',
      date: '2024-03-20'
    },
    {
      id: 2,
      name: 'Chemistry Quick Fire',
      status: 'in-progress',
      currentRound: 2,
      totalRounds: 4,
      currentRank: 8,
      timeLeft: '1h 23m'
    },
    {
      id: 3,
      name: 'Math Marathon',
      status: 'registered',
      startDate: '2024-04-18',
      participants: 2341
    }
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
      case 'live': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Animated Header */}
      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 animate-glow">
                <Sword className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-inter font-bold text-gray-900 dark:text-white">
                  Competition Arena
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Battle in real-time academic competitions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl flex items-center animate-pulse">
                <Flame className="w-4 h-4 mr-2" />
                <span className="font-semibold">Live Now</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100/50 dark:bg-gray-700/50 rounded-2xl p-1 backdrop-blur-sm">
            {[
              { id: 'live', label: 'Live Competitions', icon: Zap },
              { id: 'upcoming', label: 'Upcoming', icon: Clock },
              { id: 'my-competitions', label: 'My Competitions', icon: Trophy },
              { id: 'leaderboards', label: 'Leaderboards', icon: Crown },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
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
        {activeTab === 'live' && (
          <div className="space-y-8">
            {/* Live Competition Cards */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {liveCompetitions.map((competition) => (
                <div
                  key={competition.id}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                >
                  {/* Live Indicator */}
                  <div className="absolute top-4 right-4 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-red-500 font-medium text-sm">LIVE</span>
                  </div>

                  {/* Competition Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={competition.image}
                      alt={competition.name}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(competition.difficulty)}`}>
                        {competition.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-2">
                        {competition.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {competition.description}
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Round {competition.currentRound} of {competition.totalRounds}
                        </span>
                        <span className="font-medium text-purple-600 dark:text-purple-400">
                          Rank #{competition.userRank}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(competition.currentRound / competition.totalRounds) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-1">
                          <Users className="w-4 h-4 mr-1" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {competition.participants.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Players</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {competition.timeLeft}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Left</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-1">
                          <Trophy className="w-4 h-4 mr-1" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {competition.prize}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Prize</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Join Battle
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Live Battles</h3>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">12</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Active Players</h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8,247</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Total Prizes</h3>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">$47K</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Your Rank</h3>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">#23</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white">
                        {tournament.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {tournament.format} • {tournament.duration}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tournament.difficulty)}`}>
                    {tournament.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tournament.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">Start Time</span>
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {new Date(tournament.startTime).toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span className="text-sm">Prize Pool</span>
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {tournament.prize}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Registration Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tournament.registrations} / {tournament.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(tournament.registrations / tournament.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'my-competitions' && (
          <div className="space-y-6">
            {myCompetitions.map((competition) => (
              <div
                key={competition.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white">
                        {competition.name}
                      </h3>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}>
                        {competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  {competition.medal && (
                    <div className="flex items-center">
                      {getMedalIcon(competition.medal)}
                      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {competition.medal.charAt(0).toUpperCase() + competition.medal.slice(1)} Medal
                      </span>
                    </div>
                  )}
                </div>

                {competition.status === 'completed' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        #{competition.rank}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Final Rank</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {competition.score}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        +{competition.xpEarned}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">XP Earned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                        {((competition.rank / competition.totalParticipants) * 100).toFixed(1)}%
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Percentile</p>
                    </div>
                  </div>
                )}

                {competition.status === 'in-progress' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Round {competition.currentRound} of {competition.totalRounds}
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          Current Rank: #{competition.currentRank}
                        </span>
                        <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                          {competition.timeLeft} left
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(competition.currentRound / competition.totalRounds) * 100}%` }}
                      ></div>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                      Continue Competition
                    </button>
                  </div>
                )}

                {competition.status === 'registered' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Starts: {new Date(competition.startDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {competition.participants.toLocaleString()} participants registered
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}