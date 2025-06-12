import React, { useState } from 'react';
import { 
  X, 
  Trophy, 
  Target, 
  Users, 
  Sword, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  Crown,
  Zap,
  Flame,
  Shield,
  Sparkles,
  Gift
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <Crown className="w-16 h-16 text-yellow-400" />,
      title: 'Welcome to ECS Arena',
      subtitle: 'Where Champions Are Forged',
      description: 'Transform your extracurricular activities into an epic journey of growth, competition, and achievement.',
      features: [
        'Track activities and earn XP',
        'Compete in global leaderboards',
        'Unlock exclusive badges and rewards'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target className="w-16 h-16 text-blue-400" />,
      title: 'Olympiad Competitions',
      subtitle: 'Compete on the Global Stage',
      description: 'Join prestigious academic competitions and battle against the world\'s brightest minds.',
      features: [
        'International mathematics olympiads',
        'Science and physics competitions',
        'Real-time competitive programming'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Sword className="w-16 h-16 text-red-400" />,
      title: 'Battle Arena',
      subtitle: 'Live Competition System',
      description: 'Enter real-time academic battles with students worldwide. Test your knowledge and climb the ranks.',
      features: [
        'Live quiz battles and tournaments',
        'Real-time leaderboards',
        'Instant rewards and recognition'
      ],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Flame className="w-16 h-16 text-orange-400" />,
      title: 'Quest System',
      subtitle: 'Daily Challenges & Rewards',
      description: 'Complete daily, weekly, and special quests to earn coins, gems, and exclusive badges.',
      features: [
        'Daily and weekly challenges',
        'Special achievement quests',
        'Rare rewards and collectibles'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Trophy className="w-16 h-16 text-purple-400" />,
      title: 'Ready to Begin?',
      subtitle: 'Your Journey Starts Now',
      description: 'You\'re all set to start your epic journey. Track activities, compete globally, and become a champion!',
      features: [
        'Start logging your first activity',
        'Join your first competition',
        'Connect with fellow champions'
      ],
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    onComplete();
    onClose();
  };

  const handleSkip = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700/50 max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${currentStepData.gradient} rounded-xl flex items-center justify-center mr-4`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Getting Started</h2>
              <p className="text-gray-400 text-sm">Step {currentStep + 1} of {steps.length}</p>
            </div>
          </div>
          <button
            onClick={handleSkip}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${currentStepData.gradient} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 bg-gradient-to-r ${currentStepData.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}>
              {currentStepData.icon}
            </div>
          </div>

          {/* Title and Subtitle */}
          <h3 className="text-3xl font-bold text-white mb-2">
            {currentStepData.title}
          </h3>
          <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${currentStepData.gradient} bg-clip-text text-transparent`}>
            {currentStepData.subtitle}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {currentStepData.description}
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {currentStepData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-gray-300 bg-gray-800/50 rounded-lg p-4"
              >
                <Star className={`w-5 h-5 mr-3 bg-gradient-to-r ${currentStepData.gradient} text-transparent`} />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700/50">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? `bg-gradient-to-r ${currentStepData.gradient}`
                    : index < currentStep
                    ? 'bg-gray-500'
                    : 'bg-gray-700'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
            )}
            
            <button
              onClick={currentStep === steps.length - 1 ? handleComplete : handleNext}
              className={`flex items-center px-6 py-2 bg-gradient-to-r ${currentStepData.gradient} hover:shadow-lg text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105`}
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <Gift className="w-4 h-4 mr-2" />
                  Start Journey
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}