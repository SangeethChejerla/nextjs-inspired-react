import {
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

const navItems = [
  { key: 'k', label: 'Home', icon: HomeIcon },
  { key: 'j', label: 'About', icon: InformationCircleIcon },
  { key: 'h', label: 'My Blog', icon: BookOpenIcon },
  { key: 'l', label: 'Get Lost', icon: MapIcon },
];

export const KeyboardNav: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-black text-3xl font-bold text-center mb-8">
        Keyboard Navigation
      </h1>
      <div className="grid grid-cols-2 gap-6 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.key} className="relative">
              <div className="bg-gray-900 text-white rounded-2xl p-8 border-2 border-gray-700">
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-mono">
                    {item.key}
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <Icon className="h-8 w-8 text-indigo-400" />
                  </div>
                  <span className="text-lg font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p className="text-sm">Use keyboard keys to navigate</p>
      </div>
    </div>
  );
};
