import { Home, ClipboardList, Users } from 'lucide-react';
import { ViewState } from '@/src/types';
import { BRAND_COLOR } from '@/src/constants';

interface BottomNavProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export default function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: ViewState.HOME, label: 'Beranda', icon: Home },
    { id: ViewState.STATUS, label: 'Status', icon: ClipboardList },
    { id: ViewState.COMMUNITY, label: 'Komunitas', icon: Users },
  ];

  return (
    <div className="bg-[#FAFAFA] flex items-center justify-around py-3 pb-8 px-6 z-50 flex-shrink-0">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentView === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
              isActive ? 'scale-105' : 'opacity-40 grayscale'
            }`}
          >
            <div 
              className={`p-2.5 rounded-2xl transition-colors ${isActive ? 'bg-orange-500 shadow-lg shadow-orange-500/20' : 'bg-white shadow-sm'}`}
            >
              <Icon 
                size={20} 
                color={isActive ? '#FFFFFF' : '#9CA3AF'} 
                strokeWidth={isActive ? 3 : 2}
              />
            </div>
            <span className={`text-[10px] font-black tracking-tight ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
