import logoWhite from './logo-white.png';
import logoOrange from './logo-orange.png';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'default' | 'icon-only-orange';
}

export default function Logo({ className = '', size = 32, showText = true, variant = 'default' }: LogoProps) {
  const iconSrc = variant === 'icon-only-orange' ? logoOrange : logoWhite;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={iconSrc}
        width={size}
        height={size}
        alt="JualanBersama"
        style={{
          borderRadius: Math.round(size * 0.28),
          boxShadow: undefined,
          display: 'block',
          flexShrink: 0,
        }}
      />
      {showText && (
        <div className="flex flex-col -space-y-0.5">
          <span className="text-base font-[900] leading-tight tracking-tight">
            <span className="text-gray-900">Jualan</span>
            <span className="text-orange-500">Bersama</span>
          </span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            by PasarBersama
          </span>
        </div>
      )}
    </div>
  );
}
