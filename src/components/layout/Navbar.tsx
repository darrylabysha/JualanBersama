import { ChevronLeft, HelpCircle } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';
import Logo from '@/src/components/ui/Logo';

interface NavbarProps {
  title: string;
  onBack?: () => void;
  showHelp?: boolean;
  showLogo?: boolean;
}

export default function Navbar({ title, onBack, showHelp = true, showLogo = false }: NavbarProps) {
  return (
    <div className="z-50 flex items-center justify-between px-4 py-5 bg-[#FAFAFA] flex-shrink-0">
      <div className="flex items-center gap-3">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl bg-white shadow-sm border border-gray-100 active:scale-95 transition-all"
            id="nav-back-btn"
          >
            <ChevronLeft size={20} color={BRAND_COLOR.primary} strokeWidth={3} />
          </button>
        )}
        <h1 className="text-xl font-[900] text-gray-900 tracking-tight leading-none">{title}</h1>
      </div>
      {showHelp && (
        <button 
          className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-gray-400"
          id="nav-help-btn"
        >
          <HelpCircle size={20} />
        </button>
      )}
    </div>
  );
}
