import { motion } from 'motion/react';
import { Share2, Store, Coins, Bell, ChevronRight, Gift, Users, Headphones, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { BRAND_COLOR, CONTENT } from '@/src/constants';
import { ViewState } from '@/src/types';
import Logo from '@/src/components/ui/Logo';

interface JualanBersamaHomeProps {
  onNavigate: (view: ViewState) => void;
}

export default function JualanBersamaHome({ onNavigate }: JualanBersamaHomeProps) {
  const quickActions = [
    { icon: Share2, label: 'Ajak Teman', color: '#FF6B00', bg: '#FFF3EC', action: () => onNavigate(ViewState.WELCOME) },
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
          onClick={() => onNavigate(ViewState.WELCOME)}
          className="w-full flex items-center justify-center gap-3 py-5 rounded-[20px] font-[900] text-white text-base tracking-tight active:scale-95 transition-all"
          style={{
            background: `linear-gradient(135deg, ${BRAND_COLOR.whatsapp} 0%, #17A05D 100%)`,
            boxShadow: '0 16px 40px -8px rgba(37, 211, 102, 0.45)'
          }}
          id="main-share-btn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.526 5.855L0 24l6.341-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.006-1.371l-.359-.214-3.764.893.944-3.663-.234-.376A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
          Ajak Teman Jualan Sekarang
        </button>
      </div>
    </div>
  );
}
