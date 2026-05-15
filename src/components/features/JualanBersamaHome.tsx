import { motion } from 'motion/react';
import { Share2, Store, Coins, Bell, ChevronRight, Gift, Users, Headphones, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { BRAND_COLOR, CONTENT } from '@/src/constants';
import { ViewState } from '@/src/types';
import Logo from '@/src/components/ui/Logo';

interface JualanBersamaHomeProps {
  onNavigate: (view: ViewState) => void;
  onShare: () => void;
}

export default function JualanBersamaHome({ onNavigate, onShare }: JualanBersamaHomeProps) {
  const quickActions = [
    { icon: Share2, label: 'Ajak Teman', color: '#FF6B00', bg: '#FFF3EC', action: onShare },
    { icon: TrendingUp, label: 'Status', color: '#3B82F6', bg: '#EFF6FF', action: () => onNavigate(ViewState.STATUS) },
    { icon: Users, label: 'Komunitas', color: '#10B981', bg: '#ECFDF5', action: () => onNavigate(ViewState.COMMUNITY) },
    { icon: Headphones, label: 'Bantuan', color: '#8B5CF6', bg: '#F5F3FF', action: () => {} },
  ];

  return (
    <div className="animate-in fade-in duration-300 bg-[#F5F5F7]">
      {/* Header — DANA style */}
      <div className="bg-white px-5 pt-6 pb-4 flex items-center justify-between shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <Logo size={28} showText={true} />
        <div className="flex items-center gap-2.5">
          <button className="relative w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center active:scale-90 transition-all">
            <Bell size={19} className="text-gray-600" strokeWidth={2} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-200">
            B
          </div>
        </div>
      </div>

      {/* Wallet / Bonus Card — DANA style dark gradient */}
      <div className="px-4 pt-4 pb-2">
        <div
          className="rounded-[28px] p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)' }}
        >
          <div
            className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-20 -mt-20 -mr-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 -mb-14 -ml-14 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap size={11} className="text-orange-400" fill="currentColor" />
                  <span className="text-[10px] text-orange-300 font-black uppercase tracking-widest">Potensi Bonus Kamu</span>
                </div>
                <div className="text-[40px] font-[900] text-white tracking-tighter leading-none">Rp 100k</div>
                <div className="text-[11px] text-gray-400 mt-1.5">dari 5 undangan yang berhasil</div>
              </div>
              <div className="bg-orange-500 p-3.5 rounded-[18px] shadow-lg shadow-orange-500/30">
                <Gift size={22} color="white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-gray-400 font-bold">Progress Undangan</span>
                <span className="text-[11px] text-orange-400 font-black">2 / 5 toko aktif</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  className="h-full bg-orange-500 rounded-full"
                  style={{ boxShadow: '0 0 12px rgba(249,115,22,0.6)' }}
                />
              </div>
            </div>

            {/* View Status */}
            <button
              onClick={() => onNavigate(ViewState.STATUS)}
              className="w-full flex items-center justify-between bg-white/10 backdrop-blur-sm border border-white/10 rounded-[16px] px-4 py-3 active:scale-95 transition-all hover:bg-white/15"
            >
              <span className="text-sm font-bold text-white">Lihat Detail Status</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions — Gojek services grid */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-[24px] p-5 shadow-sm">
          <div className="grid grid-cols-4 gap-1">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={action.action}
                  className="flex flex-col items-center gap-2.5 active:scale-90 transition-all py-1"
                >
                  <div
                    className="w-14 h-14 rounded-[18px] flex items-center justify-center"
                    style={{ backgroundColor: action.bg }}
                  >
                    <Icon size={22} color={action.color} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 text-center leading-tight">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Promo Banner — Tokopedia flash sale style */}
      <div className="px-4 pb-3">
        <div
          className="rounded-[20px] px-4 py-3.5 flex items-center gap-3.5 overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #FFF3EC 0%, #FFE8D6 100%)' }}
        >
          <div className="w-10 h-10 bg-orange-500 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-300">
            <Sparkles size={18} color="white" fill="white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-black text-orange-600 uppercase tracking-wide">Promo Terbatas!</div>
            <div className="text-[12px] font-bold text-gray-800 leading-tight">Bonus 2x lipat untuk 100 pengundang pertama</div>
          </div>
          <div className="bg-orange-500 text-white text-[9px] font-black px-2.5 py-1.5 rounded-full whitespace-nowrap">
            Ambil
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 pb-4">
        <div className="bg-white rounded-[24px] p-5 shadow-sm">
          <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-5">Cara Kerja</h3>
          <div className="space-y-5">
            {CONTENT.home.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center flex-shrink-0 ${
                  idx === 0 ? 'bg-blue-50' :
                  idx === 1 ? 'bg-orange-50' :
                  'bg-green-50'
                }`}>
                  {idx === 0 && <Share2 size={20} color="#3B82F6" strokeWidth={2.5} />}
                  {idx === 1 && <Store size={20} color="#FF6B00" strokeWidth={2.5} />}
                  {idx === 2 && <Coins size={20} color="#10B981" strokeWidth={2.5} />}
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center bg-gray-100 rounded-full px-2 py-0.5 mb-1">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-wide">Langkah {idx + 1}</span>
                  </div>
                  <h4 className="font-black text-[14px] text-gray-900 leading-tight">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avatar social proof */}
      <div className="px-4 pb-4">
        <div className="bg-white rounded-[24px] px-5 py-4 shadow-sm flex items-center gap-4">
          <div className="flex -space-x-2.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden flex-shrink-0">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 88}`} alt="User" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[9px] font-black text-white flex-shrink-0">
              +10k
            </div>
          </div>
          <div>
            <div className="text-[12px] font-black text-gray-900">10.000+ seller aktif</div>
            <div className="text-[10px] font-medium text-gray-400">Baru bergabung & sudah untung!</div>
          </div>
        </div>
      </div>

      {/* Main CTA */}
      <div className="px-4 pb-8">
        <button
          onClick={onShare}
          className="w-full flex items-center justify-center gap-3 py-5 rounded-[20px] font-[900] text-white text-base tracking-tight active:scale-95 transition-all"
          style={{
            background: `linear-gradient(135deg, ${BRAND_COLOR.whatsapp} 0%, #17A05D 100%)`,
            boxShadow: '0 16px 40px -8px rgba(37, 211, 102, 0.45)'
          }}
          id="main-share-btn"
        >
          <Share2 size={20} strokeWidth={3} />
          Ajak Teman Jualan Sekarang
        </button>
      </div>
    </div>
  );
}
