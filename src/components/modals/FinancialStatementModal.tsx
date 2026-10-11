import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useFinance } from '../../context/FinanceContext';
import { formatINR } from '../../lib/format-currency';
import { exportTransactionsCSV } from '../../lib/export-csv';
import {
  X,
  Printer,
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface FinancialStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinancialStatementModal: React.FC<FinancialStatementModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { user } = useAuth();
  const { state, metrics, playLaserSynth, showToast } = useFinance();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    playLaserSynth();
    exportTransactionsCSV(state.transactions, user?.name || 'mint_user');
    showToast('CSV Exported 📥', 'Transaction statement downloaded successfully.', 'success');
  };

  const displayName = user?.name || 'mint_user';
  const displayEmail = user?.email || 'mint_user@mintmate.app';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="statement-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-[#232f48] rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar (Hidden during print) */}
        <div className="p-4 sm:p-5 border-b border-[#1c273e] bg-[#0f1524] flex items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00f59b]/20 border border-[#00f59b]/30 text-[#00f59b] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="statement-title" className="text-base font-extrabold text-white">
                30-Day Budget & Spending Statement
              </h2>
              <p className="text-xs text-gray-400">Official statement for {displayName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#162035] hover:bg-[#1d2a45] border border-[#2b3a5b] text-xs font-bold text-gray-200 hover:text-white transition-all cursor-pointer"
              title="Download CSV Spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-[#00f59b]" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00f59b] hover:bg-[#10b981] text-black text-xs font-black transition-all cursor-pointer shadow-lg"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#172033] transition-all cursor-pointer"
              aria-label="Close statement modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Statement Document Content */}
        <div className="p-6 sm:p-8 space-y-6 text-white max-h-[80vh] overflow-y-auto">
          {/* Header Branding */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1c273e] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-cyan-400 to-purple-400 font-heading">
                  MINTMATE
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold uppercase">
                  Verified Audit
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Personal Finance Simulator & Decision Engine (₹10,000 Budget)
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-gray-400 space-y-0.5">
              <div>
                Cycle: <strong className="text-white">Day {state.currentDay} of 30</strong>
              </div>
              <div>
                Issued To: <strong className="text-cyan-300">{displayName}</strong>
              </div>
              <div>
                Email: <span className="text-gray-300">{displayEmail}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#12192b] border border-[#202c46]">
              <div className="text-[10px] uppercase font-bold text-gray-400">Starting Budget</div>
              <div className="text-lg font-black text-white font-mono mt-0.5">
                {formatINR(state.startingBudget)}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#12192b] border border-[#202c46]">
              <div className="text-[10px] uppercase font-bold text-gray-400">Total Spent</div>
              <div className="text-lg font-black text-rose-400 font-mono mt-0.5">
                -{formatINR(metrics.totalExpenses)}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#12192b] border border-[#202c46]">
              <div className="text-[10px] uppercase font-bold text-gray-400">Active Balance</div>
              <div className="text-lg font-black text-[#00f59b] font-mono mt-0.5">
                {formatINR(metrics.remainingBalance)}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#12192b] border border-[#202c46]">
              <div className="text-[10px] uppercase font-bold text-gray-400">Safe Daily BPM</div>
              <div className="text-lg font-black text-cyan-400 font-mono mt-0.5">
                {formatINR(metrics.safeDailyAllowance)}/day
              </div>
            </div>
          </div>

          {/* Health & Score Summary */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 via-[#131b2e] to-emerald-900/20 border border-[#2d3a5a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center text-xl font-black">
                {metrics.health.overallScore}
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Financial Health Score ({metrics.health.overallScore}/100)
                  <ShieldCheck className="w-4 h-4 text-[#00f59b]" />
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  BPM Pace: <strong className="text-purple-300">{metrics.bpm} BPM</strong> ({metrics.bpmStatus}) · Runway: <strong className="text-cyan-300">{metrics.runwayDays} days</strong>
                </div>
              </div>
            </div>

            <div className="text-right text-xs">
              <div className="text-gray-400">Target Savings Achieved</div>
              <div className="text-sm font-extrabold text-[#00f59b]">
                {metrics.primarySavingsGoal.percentage}% of ₹1,500 Goal
              </div>
            </div>
          </div>

          {/* Recent Ledger Entries */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Transaction Ledger ({state.transactions.length} items)
              </h3>
              <span className="text-[11px] text-gray-500">Chronological Record</span>
            </div>

            <div className="rounded-2xl border border-[#1f2b44] overflow-hidden bg-[#0d1322]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#121a2d] text-gray-400 border-b border-[#1f2b44]">
                  <tr>
                    <th className="py-2.5 px-3">Timeline</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Description</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a243a]">
                  {state.transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#141d33] transition-colors">
                      <td className="py-2 px-3 text-gray-400 whitespace-nowrap">
                        Day {tx.day} ({tx.dateStr})
                      </td>
                      <td className="py-2 px-3 font-medium capitalize text-gray-300">
                        {tx.category}
                      </td>
                      <td className="py-2 px-3 text-white font-medium">
                        {tx.title}
                        {tx.note && <span className="text-gray-500 text-[11px] ml-1.5 italic">({tx.note})</span>}
                      </td>
                      <td
                        className={`py-2 px-3 text-right font-mono font-bold ${
                          tx.type === 'income' ? 'text-[#00f59b]' : 'text-rose-400'
                        }`}
                      >
                        {tx.type === 'income' ? '+' : '-'}
                        {formatINR(tx.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verification Footer */}
          <div className="pt-4 border-t border-[#1c273e] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00f59b]" />
              <span>Certified Simulation State · Real-Time Market Calibrated</span>
            </div>
            <div>MINTMATE v2.5 · Generated {new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
