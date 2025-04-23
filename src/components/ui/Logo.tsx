import React from 'react';
import { Activity } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const Logo: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="flex items-center">
      <div className="relative w-8 h-8 mr-2">
        <Activity className="w-8 h-8 text-blue-500 animate-pulse" />
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
      </div>
      <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-bold text-xl tracking-tight`}>
        Harvy<span className="text-blue-400">nix</span>
      </span>
    </div>
  );
};

export default Logo;