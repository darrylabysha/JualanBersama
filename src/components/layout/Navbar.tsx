import { ChevronLeft, HelpCircle } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';

interface NavbarProps {
  title: string;
  onBack?: () => void;
  showHelp?: boolean;
  showLogo?: boolean;
}

export default function Navbar({ title, onBack, showHelp = true }: NavbarProps) {
  return (
    <div className="z-50 flex items-center gap-3 px-4 py-4 bg-white border-b border-gray-100 flex-shrink-0 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
      {onBack && (
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-gray-50 border border-gray-100 active:scale-90 transition-all flex-shrink-0"
          id="nav-back-btn"
        >
          <ChevronLeft size={20} color={BRAND_COLOR.primary} strokeWidth={2.5} />
        </button>
      )}
      <h1 className="flex-1 text-[17px] font-[900] text-gray-900 tracking-tight leading-none">{title}</h1>
      {showHelp && (
        <button
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-gray-50 border border-gray-100 text-gray-400 active:scale-90 transition-all flex-shrink-0"
          id="nav-help-btn"
        >
          <HelpCircle size={19} />
        </button>
      )}
    </div>
  );
}
