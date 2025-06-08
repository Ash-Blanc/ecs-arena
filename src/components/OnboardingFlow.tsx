import React, { useState } from 'react';
import { ArrowRight, Trophy, Target, Users, Sword, Star } from 'lucide-react';

interface OnboardingFlowProps {
  onNavigate: (screen: string) => void;
}

export default function OnboardingFlow({ onNavigate }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <Trophy className="w-12 h-12 text-accent-500" />,
      title: 'Track Your Achievements',
      description: 'Log your extracurricular activities and watch your XP grow as you level up through your high school journey.',
      features: ['Earn XP for every activity', 'Unlock achievement badges', 'Track your progress over time'],
    },
    {
      icon: <Target className="w-12 h-12 text-primary-500" />,
      title: 'Set Goals & Milestones',
      description: 'Create personal goals and compete in challenges to stay motivated and engaged with your activities.',
      features: ['Personal goal setting', 'Weekly challenges', 'Progress tracking'],
    },
    {
      icon: <Users className="w-12 h-12 text-secondary-500" />,
      title: 'Connect & Compete',
      description: 'Join your school leaderboard, see how you rank against peers, and celebrate achievements together.',
      features: ['School leaderboards', 'Friend connections', 'Achievement sharing'],
    },
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onNavigate('dashboard');
    }
  };

  const handleSkip = () => {
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-lg">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
            <button
              onClick={handleSkip}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Skip tour
            </button>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Onboarding Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 text-center animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
              {currentStepData.icon}
            </div>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-inter font-bold text-gray-900 dark:text-white mb-4">
            {currentStepData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-roboto mb-8 leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {currentStepData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-gray-700 dark:text-gray-300"
              >
                <Star className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentStep
                      ? 'bg-primary-500'
                      : index < currentStep
                      ? 'bg-secondary-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Logo and Tagline */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center mb-2">
            <Sword className="w-6 h-6 text-primary-500 mr-2" />
            <span className="text-xl font-inter font-bold text-gray-900 dark:text-white">
              ECS Arena
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Where champions are forged
          </p>
        </div>
      </div>
    </div>
  );
}