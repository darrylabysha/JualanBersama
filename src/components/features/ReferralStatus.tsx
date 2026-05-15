import { motion } from 'motion/react';
import { CheckCircle2, Clock, Package, Coins } from 'lucide-react';
import { BRAND_COLOR } from '@/src/constants';
import { Referral } from '@/src/types';

const MOCK_REFERRALS: Referral[] = [
  { id: '1', name: 'Warung Bu Rini', status: 'active', date: '12 Mei 2026', rewardType: 'voucher' },
  { id: '2', name: 'Fashion Sista', status: 'rewarded', date: '10 Mei 2026', rewardType: 'voucher' },
  { id: '3', name: 'Snack Krenyes', status: 'registering', date: '14 Mei 2026', rewardType: 'shipping' },
  { id: '4', name: 'Toko Berkah', status: 'invited', date: '15 Mei 2026', rewardType: 'voucher' },
];

export default function ReferralStatus() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Package size={18} className="text-orange-500" />;
      case 'rewarded': return <CheckCircle2 size={18} className="text-green-500" />;
      case 'registering': return <Clock size={18} className="text-blue-500" />;
      default: return <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Clock size={18} className="text-gray-400" /></motion.div>;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Toko Aktif (Siap Penjualan)';
      case 'rewarded': return 'Bonus Sudah Cair';
      case 'registering': return 'Sedang Daftar Produk';
      default: return 'Link Sudah Dikirim';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-[#FAFAFA]">
      <div className="bg-white p-8 rounded-[32px] border border-white shadow-xl shadow-orange-900/5 flex items-center justify-between">
         <div>
            <div className="text-[10px] text-orange-600 font-black uppercase tracking-widest mb-1">Total Bonus Anda</div>
            <div className="text-[32px] font-[900] text-gray-900 tracking-tighter leading-none">Rp 100.000</div>
         </div>
         <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center shadow-[0_12px_24px_-8px_rgba(249,115,22,0.5)]">
            <Coins size={32} color="#FFFFFF" strokeWidth={2.5} />
         </div>
      </div>

      <div className="space-y-4">
        {MOCK_REFERRALS.map((ref, idx) => (
          <motion.div 
            key={ref.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-[28px] border border-white shadow-sm flex justify-between items-center"
          >
            <div className="flex gap-4 items-center">
               <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center transition-colors ${ref.status === 'rewarded' ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
                  {getStatusIcon(ref.status)}
               </div>
               <div>
                  <h4 className="font-black text-gray-900 text-sm tracking-tight">{ref.name}</h4>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider mt-0.5">{getStatusText(ref.status)}</p>
               </div>
            </div>
            <div className="text-right">
               <div className="text-[10px] font-bold text-gray-300 mb-1 tracking-tighter">{ref.date}</div>
               {ref.status === 'rewarded' && (
                 <span className="text-[10px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">+Rp 50rb</span>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
         <p className="text-xs text-gray-500 leading-relaxed text-center italic">
           "Tips: Ajak temanmu upload minimal 3 produk agar kesempatan toko mereka laku lebih tinggi!"
         </p>
      </div>
    </div>
  );
}
