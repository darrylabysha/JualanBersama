/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/src/components/layout/Navbar';
import BottomNav from '@/src/components/layout/BottomNav';
import JualanBersamaHome from '@/src/components/features/JualanBersamaHome';
import ReferralStatus from '@/src/components/features/ReferralStatus';
import CommunityPage from '@/src/components/features/CommunityPage';
import SellerWelcome from '@/src/components/features/SellerWelcome';
import OnboardingForm from '@/src/components/features/OnboardingForm';
import { ViewState } from '@/src/types';
import { CheckCircle2, Share2 } from 'lucide-react';

// ─── Toast ───────────────────────────────────────────────────────────────────

type ToastType = 'success' | 'info' | 'error';

interface ToastMsg {
  id: number;
  type: ToastType;
  text: string;
}

let _toastId = 0;

function Toast({ toast, onDone }: { toast: ToastMsg; onDone: (id: number) => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 2800);
    const t2 = setTimeout(() => onDone(toast.id), 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [toast.id, onDone]);

  const bg =
    toast.type === 'success' ? 'bg-green-500' :
    toast.type === 'error'   ? 'bg-red-500'   : 'bg-gray-800';

  return (
    <div className={`${leaving ? 'toast-out' : 'toast-in'} ${bg} text-white flex items-center gap-3 px-4 py-3 rounded-[16px] shadow-2xl shadow-black/20 max-w-[320px] w-full`}>
      <CheckCircle2 size={18} strokeWidth={2.5} className="flex-shrink-0" />
      <span className="text-[13px] font-bold leading-tight">{toast.text}</span>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  const showToast = useCallback((text: string, type: ToastType = 'success') => {
    const id = ++_toastId;
    setToasts(prev => [...prev, { id, type, text }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref')) {
      setCurrentView(ViewState.WELCOME);
    }
  }, []);

  const handleBack = () => {
    if (currentView === ViewState.STATUS)      setCurrentView(ViewState.HOME);
    else if (currentView === ViewState.ONBOARDING) setCurrentView(ViewState.WELCOME);
    else if (currentView === ViewState.WELCOME)    setCurrentView(ViewState.HOME);
    else if (currentView === ViewState.COMMUNITY)  setCurrentView(ViewState.HOME);
  };

  const getNavbarTitle = () => {
    switch (currentView) {
      case ViewState.HOME:       return 'JualanBersama';
      case ViewState.STATUS:     return 'Status Undangan';
      case ViewState.COMMUNITY:  return 'Komunitas';
      case ViewState.WELCOME:    return 'Gabung Sekarang';
      case ViewState.ONBOARDING: return 'Buka Toko';
      default:                   return 'PasarBersama';
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent(
      'Ajak Teman Jualan Online, Tumbuh Bersama! Daftar lewat link ini buat dapet bonus modal jualan: ' +
      window.location.origin + '?ref=VIP'
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
    showToast('Link undangan berhasil dibuka di WhatsApp!', 'success');
  };

  const showBottomNav = [ViewState.HOME, ViewState.STATUS, ViewState.COMMUNITY].includes(currentView);

  return (
    <div className="h-[100dvh] bg-[#F5F5F7] font-sans max-w-md mx-auto shadow-2xl relative flex flex-col overflow-hidden">
      {currentView !== ViewState.HOME && (
        <Navbar
          title={getNavbarTitle()}
          onBack={(!showBottomNav && currentView !== ViewState.HOME) ? handleBack : undefined}
          showHelp={false}
          showLogo={false}
        />
      )}

      <main className="flex-1 overflow-y-auto custom-scrollbar relative">
        {currentView === ViewState.HOME && (
          <JualanBersamaHome onNavigate={setCurrentView} onShare={handleShare} />
        )}
        {currentView === ViewState.STATUS && (
          <ReferralStatus />
        )}
        {currentView === ViewState.COMMUNITY && (
          <CommunityPage />
        )}
        {currentView === ViewState.WELCOME && (
          <SellerWelcome onStart={() => setCurrentView(ViewState.ONBOARDING)} />
        )}
        {currentView === ViewState.ONBOARDING && (
          <OnboardingForm
            onComplete={() => {
              showToast('Pendaftaran berhasil! Kami akan menghubungimu via WhatsApp.', 'success');
              setCurrentView(ViewState.HOME);
            }}
          />
        )}
      </main>

      {showBottomNav && (
        <BottomNav currentView={currentView} onNavigate={setCurrentView} />
      )}

      {/* Toast container */}
      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-4 z-[100] flex flex-col gap-2 items-center pointer-events-none">
        {toasts.map(t => (
          <Toast key={t.id} toast={t} onDone={removeToast} />
        ))}
      </div>
    </div>
  );
}
