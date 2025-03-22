
import React, { useState, useEffect } from 'react';
import { getEmails, exportEmailsAsCSV, clearEmails } from '@/utils/emailStorage';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ArrowLeft, Download, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailList: React.FC = () => {
  const [emails, setEmails] = useState<string[]>([]);
  
  useEffect(() => {
    // Load emails from localStorage
    setEmails(getEmails());
  }, []);
  
  const handleExport = () => {
    const csvContent = exportEmailsAsCSV();
    
    if (csvContent) {
      // Create CSV file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'waitlist_emails.csv');
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('Emails exported successfully');
    } else {
      toast.error('No emails to export');
    }
  };
  
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all emails? This cannot be undone.')) {
      clearEmails();
      setEmails([]);
      toast.success('All emails cleared');
    }
  };
  
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Waitlist Emails</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleExport} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Button variant="destructive" onClick={handleClear} className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm p-4">
          {emails.length > 0 ? (
            <div className="space-y-2">
              <p className="text-muted-foreground mb-4">Total emails: {emails.length}</p>
              <ul className="space-y-2">
                {emails.map((email, index) => (
                  <li key={index} className="p-3 bg-muted/50 rounded-md">
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No emails collected yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailList;
