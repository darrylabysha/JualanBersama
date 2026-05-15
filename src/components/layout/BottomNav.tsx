import { Home, ClipboardList, Users } from 'lucide-react';
import { ViewState } from '@/src/types';

interface BottomNavProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export default function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: ViewState.HOME,      label: 'Beranda',   icon: Home },
    { id: ViewState.STATUS,    label: 'Status',    icon: ClipboardList },
    { id: ViewState.COMMUNITY, label: 'Komunitas', icon: Users },
  ];

  return (
    <div className="bg-white border-t border-gray-100 flex items-stretch justify-around z-50 flex-shrink-0 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = currentView === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="flex flex-col items-center gap-1 flex-1 pt-3 pb-7 active:scale-90 transition-transform duration-150 relative"
          >
            {/* Active top indicator */}
            <span
              className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-8 bg-orange-500' : 'w-0 bg-transparent'
              }`}
            />

            <div className={`p-2 rounded-[14px] transition-all duration-200 ${isActive ? 'bg-orange-50' : ''}`}>
              <Icon
                size={22}
                color={isActive ? '#FF6B00' : '#CBD5E1'}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </div>
            <span className={`text-[10px] font-bold transition-all duration-200 ${
              isActive ? 'text-orange-500' : 'text-gray-400'
            }`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
