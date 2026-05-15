import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, Package, Coins, Award, ChevronRight } from 'lucide-react';
import { Referral } from '@/src/types';

const MOCK_REFERRALS: Referral[] = [
  { id: '1', name: 'Warung Bu Rini', status: 'active', date: '12 Mei 2026', rewardType: 'voucher' },
  { id: '2', name: 'Fashion Sista', status: 'rewarded', date: '10 Mei 2026', rewardType: 'voucher' },
  { id: '3', name: 'Snack Krenyes', status: 'registering', date: '14 Mei 2026', rewardType: 'shipping' },
  { id: '4', name: 'Toko Berkah', status: 'invited', date: '15 Mei 2026', rewardType: 'voucher' },
];

const STATUS_FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'invited', label: 'Diundang' },
  { id: 'registering', label: 'Daftar' },
  { id: 'active', label: 'Aktif' },
  { id: 'rewarded', label: 'Bonus Cair' },
];

const MILESTONES = [
  { count: 1, bonus: '20rb', reached: true },
  { count: 3, bonus: '50rb', reached: true },
  { count: 5, bonus: '100rb', reached: false },
  { count: 10, bonus: '250rb', reached: false },
];

const STATUS_CONFIG: Record<string, { icon: typeof Package; color: string; bg: string; text: string; badgeCls: string }> = {
  active:      { icon: Package,      color: '#F97316', bg: '#FFF7ED', text: 'Toko Aktif',     badgeCls: 'bg-orange-100 text-orange-600' },
  rewarded:    { icon: CheckCircle2, color: '#10B981', bg: '#ECFDF5', text: 'Bonus Cair',     badgeCls: 'bg-green-100 text-green-600'  },
  registering: { icon: Clock,        color: '#3B82F6', bg: '#EFF6FF', text: 'Sedang Daftar',  badgeCls: 'bg-blue-100 text-blue-600'   },
  invited:     { icon: Clock,        color: '#9CA3AF', bg: '#F9FAFB', text: 'Link Terkirim',  badgeCls: 'bg-gray-100 text-gray-500'   },
};

export default function ReferralStatus() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? MOCK_REFERRALS : MOCK_REFERRALS.filter(r => r.status === filter);

  return (
    <div className="bg-[#F5F5F7] min-h-full">

      {/* Balance Card — orange gradient (DANA-style) */}
      <div className="px-4 pt-4 pb-3">
        <div
          className="rounded-[28px] p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #E05000 100%)' }}
        >
          <div
            className="absolute top-0 right-0 w-44 h-44 rounded-full opacity-15 -mt-16 -mr-16 pointer-events-none"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-[10px] text-orange-200 font-black uppercase tracking-widest mb-2">Total Bonus Kamu</div>
                <div className="text-[42px] font-[900] text-white tracking-tighter leading-none">Rp 100.000</div>
                <div className="text-[11px] text-orange-200 mt-1.5">2 toko aktif · 1 bonus sudah cair</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-[18px]">
                <Coins size={24} color="white" strokeWidth={2.5} />
              </div>
            </div>
            <button className="bg-white text-orange-600 font-black text-[13px] px-6 py-2.5 rounded-[14px] active:scale-95 transition-all shadow-lg shadow-orange-900/20">
              Cairkan Bonus →
            </button>
          </div>
        </div>
      </div>

      {/* Milestone Tracker — Tokopedia badge style */}
      <div className="px-4 pb-3">
        <div className="bg-white rounded-[24px] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-black text-gray-800">Milestone Bonus</h3>
            <Award size={15} className="text-orange-500" />
          </div>

          <div className="relative flex justify-between items-center">
            {/* connecting track */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-100 z-0" />
            <motion.div
              className="absolute top-5 left-5 h-0.5 bg-orange-400 z-0"
              initial={{ width: 0 }}
              animate={{ width: '42%' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />

            {MILESTONES.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 z-10 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black border-2 transition-all ${
                  m.reached
                    ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200'
                    : 'bg-white border-gray-200 text-gray-400'
                }`}>
                  {m.reached ? '✓' : m.count}
                </div>
                <div className="text-[9px] font-bold text-gray-400 text-center">{m.count} toko</div>
                <div className={`text-[9px] font-black ${m.reached ? 'text-orange-500' : 'text-gray-300'}`}>+{m.bonus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary stats row */}
      <div className="px-4 pb-3 grid grid-cols-3 gap-3">
        {[
          { label: 'Diundang', value: '4', color: 'text-gray-700' },
          { label: 'Aktif', value: '2', color: 'text-orange-500' },
          { label: 'Bonus Cair', value: '1', color: 'text-green-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[18px] p-4 text-center shadow-sm">
            <div className={`text-[22px] font-[900] ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] font-bold text-gray-400 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Chips — Tokopedia style */}
      <div className="px-4 pb-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {STATUS_FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold whitespace-nowrap transition-all active:scale-95 ${
                filter === f.id
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                  : 'bg-white text-gray-500 border border-gray-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Referral List */}
      <div className="px-4 space-y-3 pb-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((ref, idx) => {
            const cfg = STATUS_CONFIG[ref.status] ?? STATUS_CONFIG.invited;
            const Icon = cfg.icon;
            return (
              <motion.div
                key={ref.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.06 }}
                className="p-4 bg-white rounded-[20px] flex items-center gap-4 shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-[16px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cfg.bg }}
                >
                  <Icon size={20} color={cfg.color} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-gray-900 text-[14px] truncate">{ref.name}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{ref.date}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${cfg.badgeCls}`}>
                    {cfg.text}
                  </span>
                  {ref.status === 'rewarded' && (
                    <span className="text-[11px] font-black text-green-600">+Rp 50rb</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <div className="text-gray-300 text-4xl mb-2">📭</div>
            <p className="text-[13px] text-gray-400 font-bold">Belum ada data di kategori ini</p>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="px-4 pb-8">
        <div className="bg-orange-50 border border-orange-100 rounded-[20px] p-5 flex items-start gap-3">
          <span className="text-lg">💡</span>
          <p className="text-[12px] text-orange-700 leading-relaxed">
            <strong>Tips:</strong> Ajak temanmu upload minimal 3 produk agar toko mereka lebih cepat aktif dan bonus kamu segera cair!
          </p>
        </div>
      </div>
    </div>
  );
}
