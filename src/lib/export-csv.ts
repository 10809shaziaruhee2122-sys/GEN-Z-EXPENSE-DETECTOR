import { Transaction } from '../types/finance';

export function exportTransactionsCSV(transactions: Transaction[], userName: string = 'mint_user') {
  const headers = ['ID', 'Date', 'Day', 'Category', 'Type', 'Title', 'Amount (INR)', 'Note', 'Simulated'];
  
  const rows = transactions.map((tx) => [
    `"${tx.id}"`,
    `"${tx.dateStr || ''}"`,
    tx.day,
    `"${tx.category}"`,
    `"${tx.type}"`,
    `"${(tx.title || '').replace(/"/g, '""')}"`,
    tx.amount,
    `"${(tx.note || '').replace(/"/g, '""')}"`,
    tx.isSimulated ? 'YES' : 'NO',
  ]);

  const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  const dateStr = new Date().toISOString().slice(0, 10);
  link.setAttribute('download', `mintmate_${userName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_transactions_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
