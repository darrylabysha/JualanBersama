import { BRAND_COLOR } from '@/src/constants';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 32, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <rect width="40" height="40" rx="11" fill={BRAND_COLOR.primary} />
        {/* Philosophical: Two paths becoming one shared journey (Unity & Growth) */}
        <path 
          d="M16 14C12 14 12 20 16 20C20 20 20 26 24 26C28 26 28 20 24 20C20 20 20 14 16 14Z" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2.5" fill="white" />
        <path 
          d="M20 20V30" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          opacity="0.6"
        />
        <path 
          d="M20 20V10" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      {showText && (
        <div className="flex flex-col -space-y-1">
          <span className="text-base font-[900] text-gray-900 leading-tight tracking-tight">JualanBersama</span>
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
            <span className="w-1 h-1 bg-orange-500 rounded-full" />
            by PasarBersama
          </span>
        </div>
      )}
    </div>
  );
}
