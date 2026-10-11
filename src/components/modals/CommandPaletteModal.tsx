import React, { useState, useEffect } from 'react';
import { NavTabId } from '../layout/Sidebar';
import { useFinance } from '../../context/FinanceContext';
import { useAuth } from '../../context/AuthContext';
import { exportTransactionsCSV } from '../../lib/export-csv';
import {
  Search,
  LayoutDashboard,
  ReceiptText,
  Zap,
  Target,
  CalendarDays,
  LineChart,
  Activity,
  User,
  Plus,
  Download,
  FileText,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  X,
  ArrowRight,
} from 'lucide-react';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavTabId) => void;
  onOpenAddModal: () => void;
  onOpenStatement: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenAddModal,
  onOpenStatement,
}) => {
  const [query, setQuery] = useState('');
  const { state, isSoundEnabled, toggleSound, playLaserSynth, showToast, resetToDemoData } = useFinance();
  const { user, updateProfile } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'nav-overview',
      category: 'Navigation',
      label: 'Jump to Overview Dashboard',
      hint: 'Balance, BPM equalizer, daily allowance',
      icon: LayoutDashboard,
      perform: () => {
        onNavigate('overview');
        onClose();
      },
    },
    {
      id: 'nav-simulator',
      category: 'Navigation',
      label: 'Open Decision Simulator (Moves)',
      hint: 'Simulate purchases against cash flow & market deals',
      icon: Zap,
      perform: () => {
        onNavigate('simulator');
        onClose();
      },
    },
    {
      id: 'nav-transactions',
      category: 'Navigation',
      label: 'View Transactions & Spends',
      hint: 'Search, filter, delete, or export transactions',
      icon: ReceiptText,
      perform: () => {
        onNavigate('transactions');
        onClose();
      },
    },
    {
      id: 'nav-goals',
      category: 'Navigation',
      label: 'Savings Goals Tracker',
      hint: 'Track Goa Trip & Emergency Fund progress',
      icon: Target,
      perform: () => {
        onNavigate('goals');
        onClose();
      },
    },
    {
      id: 'nav-subscriptions',
      category: 'Navigation',
      label: 'Subscriptions & Bills',
      hint: 'Netflix, Spotify, Wifi commitments',
      icon: CalendarDays,
      perform: () => {
        onNavigate('subscriptions');
        onClose();
      },
    },
    {
      id: 'nav-forecast',
      category: 'Navigation',
      label: '30-Day Cash Flow Forecast',
      hint: 'Runway charts and month-end trajectory',
      icon: LineChart,
      perform: () => {
        onNavigate('forecast');
        onClose();
      },
    },
    {
      id: 'nav-health',
      category: 'Navigation',
      label: 'Financial Health Diagnostics',
      hint: 'Overall score (0-100) and actionable tips',
      icon: Activity,
      perform: () => {
        onNavigate('health');
        onClose();
      },
    },
    {
      id: 'nav-profile',
      category: 'Navigation',
      label: 'User Profile & Identity',
      hint: 'Edit display name, avatar emoji, VIP badge',
      icon: User,
      perform: () => {
        onNavigate('profile');
        onClose();
      },
    },
    {
      id: 'act-add-tx',
      category: 'Quick Actions',
      label: 'Record New Transaction',
      hint: 'Add an expense or income to the budget',
      icon: Plus,
      perform: () => {
        onClose();
        onOpenAddModal();
      },
    },
    {
      id: 'act-statement',
      category: 'Quick Actions',
      label: 'View / Print Financial Statement',
      hint: 'Open official certified 30-day statement & PDF',
      icon: FileText,
      perform: () => {
        onClose();
        onOpenStatement();
      },
    },
    {
      id: 'act-export-csv',
      category: 'Quick Actions',
      label: 'Export Transactions as CSV',
      hint: 'Download all ledger rows to a spreadsheet',
      icon: Download,
      perform: () => {
        playLaserSynth();
        exportTransactionsCSV(state.transactions, user?.name || 'mint_user');
        showToast('CSV Exported 📥', 'Spreadsheet downloaded successfully.', 'success');
        onClose();
      },
    },
    {
      id: 'act-toggle-audio',
      category: 'Quick Actions',
      label: isSoundEnabled ? 'Mute EDM Sound Effects' : 'Enable EDM Sound FX',
      hint: 'Synthesizers, drop chimes, and audio feedback',
      icon: isSoundEnabled ? VolumeX : Volume2,
      perform: () => {
        toggleSound();
        showToast('Audio FX', isSoundEnabled ? 'Sound muted' : 'EDM sound enabled 🔊', 'info');
        onClose();
      },
    },
    {
      id: 'act-preset-shazia',
      category: 'Profiles',
      label: 'Switch Profile: Shazia Ruhee (Participant)',
      hint: 'Set active account to Shazia Ruhee (10809shaziaruhee2122@gmail.com)',
      icon: Sparkles,
      perform: () => {
        updateProfile({
          name: 'Shazia Ruhee',
          email: '10809shaziaruhee2122@gmail.com',
          avatar: '⚡',
          role: 'Hackathon Champion',
        });
        playLaserSynth();
        showToast('Profile Updated', 'Active account name set to Shazia Ruhee ✨', 'success');
        onClose();
      },
    },
    {
      id: 'act-reset-mint',
      category: 'Profiles',
      label: 'Reset Profile to mint_user',
      hint: 'Set active name to general default "mint_user"',
      icon: RotateCcw,
      perform: () => {
        updateProfile({
          name: 'mint_user',
          email: 'mint_user@mintmate.app',
          avatar: '😎',
          role: 'VIP Money Master',
        });
        playLaserSynth();
        showToast('Reset to mint_user', 'Profile restored to default name.', 'info');
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.hint.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0b101c] border border-[#253452] rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#1c2942] flex items-center gap-3 bg-[#0e1424]">
          <Search className="w-5 h-5 text-[#00f59b] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, views, or tools... (Esc to close)"
            className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a2337] transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 divide-y divide-[#172238]/60">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-xs">
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.perform}
                  className="w-full text-left p-3 rounded-2xl hover:bg-[#152035] flex items-center justify-between gap-3 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#18233a] group-hover:bg-[#00f59b]/20 group-hover:text-[#00f59b] text-gray-300 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white group-hover:text-[#00f59b] transition-colors truncate">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-400 truncate mt-0.5">
                        {item.hint}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#18233a] text-gray-400 font-semibold uppercase">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="p-2.5 px-4 bg-[#0a0e18] border-t border-[#18233a] flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#172238] text-gray-300 font-mono text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-[#172238] text-gray-300 font-mono text-[10px]">K</kbd> anytime</span>
          </div>
          <div>MINTMATE Command Hub</div>
        </div>
      </div>
    </div>
  );
};
