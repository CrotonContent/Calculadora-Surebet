import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <div className="group relative inline-block ml-1">
      <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
      <div className="invisible group-hover:visible absolute z-10 w-64 bg-gray-900 text-white text-sm rounded-md p-2 -right-2 top-6 transform -translate-x-1/2">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900" />
        {text}
      </div>
    </div>
  );
}